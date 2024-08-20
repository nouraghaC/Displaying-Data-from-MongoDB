import React, { useState, useEffect } from 'react';

async function fetchFileContent(filePath) {
  try {
    const response = await fetch(filePath);
    const content = await response.text(); // Or use response.blob() for binary data
    return content;
  } catch (error) {
    console.error(`Error fetching file content from ${filePath}:`, error);
    return null; 
  }
}

function FileContentViewer(props) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const fileContent = await fetchFileContent(props.filePath);
      setContent(fileContent);
    };

    fetchContent();
  }, [props.filePath]); // Re-fetch if filePath changes

  return (
    <div>
      {content !== null && 
        <pre>{content}</pre> 
      }
      {content === null && 
        <p>Loading file content...</p>
      }
    </div>
  );
}

export default FileContentViewer;