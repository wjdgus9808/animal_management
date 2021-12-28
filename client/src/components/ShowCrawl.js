import React, { useEffect,  useState } from 'react';
import axios from 'axios';

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
        <>
            {inputData.map(data=>{
                    var imgUrl="/images/"+"img"+data.id+".jpg"
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
                                        <dt>이미지</dt>
                                        <img className="small" src ={imgUrl} />
                                    </dl>
                                </div>
                          
                           
                        </ul>
                           
                    </div>)
                })}
        </>
    )
}
export default ShowCrawl;