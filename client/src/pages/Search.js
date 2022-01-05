import React, { useEffect,useState } from 'react'
import '../App.css'
import axios from 'axios';

//결과창
function Search(props){
    const [inputData,setInputData]=useState([{
        rank:'',
        date:'',
        img:''
    }])
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        const interval = setInterval(async()=>{       
            try{  
                const res = await axios.get('/api/search')  
                console.log(res);
                setInputData([{
                    rank:'',
                    date:'',
                    img:''
                }])
                const _inputData = await res.data.data.map((rowData) => ({
                        rank:rowData.rank,
                        date:rowData.date,
                        img:rowData.img
                      })
                )
                setInputData(inputData.concat(_inputData))
                console.log(inputData)
                if(inputData)setIsLoading(false);
              } catch(e){
                console.error(e.message)
              }
        },6000)
        return()=>{clearInterval(interval); console.log('페이지나감'); }
          
    },[]) 
    if(isLoading) return <img src="favicon.ico" />
    return(
        <div className="container">
        {inputData.map(data=>{
            var imgUrl="/images/"+data.img
            return(data.rank!==''&&
                <div className="item" key = {data.rank}>                            
                    <div>
                        <img className="small" src ={imgUrl} />                                   
                        
                        </div>
                        <ul>
                            <dt>날짜</dt>
                            <span>{data.date}</span>
                            순위
                            <br></br>
                            {data.rank}                                    
                       </ul>
                    </div>

                )
            })}
           
    </div>
    )
}
export default Search;