import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Main(props){
    const isLogin = props.isLogin
    const [inputData,setInputData]=useState([{
        id:'',
        date:''
    }])
    //파일업로드
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
        } catch (ex) {
          console.log(ex);
        }
      };    
    //크롤링데이터 출력
    useEffect(async() => {
        try{
          const res = await axios.get('/api/crawl')
          console.log(res);
          const _inputData = await res.data.data.map((rowData) => ({
                  id:rowData.id,
                  date:rowData.date
                })
          )
          setInputData(inputData.concat(_inputData))
          console.log(inputData)
        } catch(e){
          console.error(e.message)
        }
      },[])
    const onLogout=()=>{
        sessionStorage.removeItem('user_id')
        document.location.href='/'
    }
    return(
        <div>
            <div>
                <h2>Main 페이지</h2>
            </div>
            <div>
                {inputData.map(data=>{
                    return(data.id!==''&&<div className='boardList' key = {data.id}>
                        <ul className="list">
                            
                                <div className ="txt">
                                    <dl>
                                        <dt>아이디</dt>
                                        <dd>{data.id} </dd>
                                    </dl>
                                    <dl>
                                        <dt>날짜</dt>
                                        <dd>{data.date}</dd>
                                    </dl>
                                </div>
                          
                           
                        </ul>
                           
                    </div>)
                })}
            </div>
            <div>
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
            <div className="App">
                <input type="file" onChange={saveFile} />
                 <button onClick={uploadFile}>Upload</button>
            </div>
        </div>
    )
}
export default Main;