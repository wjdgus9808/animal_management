import React, { useEffect,  useState } from 'react';
import axios from 'axios';
import '../App.css'
const ShowCrawl = () =>{
    const [inputData,setInputData]=useState([{
        id:'',
        date:'',
        img:''
    }])
     //크롤링데이터 출력
    useEffect(async() => {
      
        try{
            
            
            const res = await axios.get('/api/crawl/get_crawldata')
            console.log(res);
            const _inputData = await res.data.data.map((rowData) => ({
                    id:rowData.id,
                    date:rowData.date,
                    img:rowData.img
                  })
            )
            setInputData(inputData.concat(_inputData))
            console.log(inputData)
          } catch(e){
            console.error(e.message)
          }
        },[])
    return(
        <div className="container">
            {inputData.map(data=>{
                var imgUrl="/images/"+"img"+data.id+".jpg"
                return(data.id!==''&&
                    <div className="item" key = {data.id}>                            
                        <div>
                            <img className="small" src ={imgUrl} />                                   
                            
                            </div>
                            <ul>
                                <dt>날짜</dt>
                                <span>{data.date}</span>
                                아이디
                                <br></br>
                                {data.id}                                    
                           </ul>
                        </div>
   
                    )
                })}
               
        </div>
    )
    
}
export default ShowCrawl;