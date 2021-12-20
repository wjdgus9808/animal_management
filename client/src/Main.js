import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Main(props){
    const isLogin = props.isLogin
    const [inputData,setInputData]=useState([{
        id:'',
        date:''
    }])
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
                    return(<div>
                        {data.id}    
                    </div>)
                })}
            </div>
            <div>
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Main;