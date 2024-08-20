
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import FileContentViewer from './FileContentViewer';

function App() {
  
  const [items,setItems]=useState([]);
  // Initial tab is 0 (first tab)
  const [activeTab, setActiveTab] = useState(0); 
  
  //Get data from "/api/result"
  const getdata = async() => {
    try{
     await fetch("/api/result")
    .then(res => res.json())
    .then(json => setItems(json));
    }
    catch{
      console.log('error')
    }
  }

 
  useEffect(() => {
     getdata()
  },[])
 
 //console.log(items)
  const tabs=items;
 //console.log(tabs)
 
 //setTabs(items);
  
  
  
  //Function to change the active tab on click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  

 
  

  return (    
    <div className="App">
      <Navbar/>
        <div className="content">
        <div className="tab-view">
        <ul className="tab-list">     
           {tabs.map((tab,index) => (
              
              <li className="item-preview"
                key={index}
                className = {index === activeTab ? 'active' : ''}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </li>      
             ))}
            </ul>
            {items.length > 0 &&  //This is important to solve synching problems(trying to view data before fetching)
            <div className="tab-content">
            
            <tr className="property-view">
            <td className="property-name">has anova</td>
            <td className="item-preview">
              { tabs[activeTab].P135054.label}
            </td>      
            </tr>

            <tr className="property-view">
            <td className="property-name">has linear regression</td>
            <td className="item-preview">
              {tabs[activeTab].P135056.label}
            </td>      
            </tr>

            <tr className="property-view">
            <td className="property-name">has lmm fitting</td>
            <td className="item-preview">
              {tabs[activeTab].P117003.label}
            </td>      
            </tr>

            <tr className="property-view">
            <td className="property-name">has lmm prediction</td>
            <td className="item-preview">
              {tabs[activeTab].P135055.label}
            </td>      
            </tr>

            <tr className="property-view">
            <td className="property-name">has lmm significance testing</td>
            <td className="item-preview">
              {tabs[activeTab].P135053.label}
            </td>      
            </tr>

            <tr className="property-view">
            <td className="property-name">has implementation</td>
            <td className="item-preview">
              <pre>
            <FileContentViewer filePath={tabs[activeTab].P110081} />
              </pre>
              <a className="show-all" href={tabs[activeTab].P110081}>Show all</a>
              
            </td>      
            </tr>
          </div>  
        }       
        </div> 
      </div>
    </div>
    )
  }        
export default App;
