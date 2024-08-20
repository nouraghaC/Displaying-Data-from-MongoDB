const  Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Displaying Data from MongoDB Atlas Database</h1>
            <div className="links">
                <a href="/" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px'
                }}>Home</a>
            </div>
        </nav>
     );
}
 
export default Navbar;