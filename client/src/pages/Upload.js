import React, { useEffect,  useState } from 'react';
import axios from 'axios';
import Search from './Search';


function Upload(){
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
      
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "/api/upload",
            formData
          );
          console.log(res);
          document.location.href='/search_result'
        } catch (ex) {
          console.log(ex);
        }
      };    
    return(
        <>
            <div className="App">
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile}>Upload</button>
                
            </div>
            
            
        </>
    )
}
export default Upload