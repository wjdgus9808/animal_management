import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Detail(){
    const {id} = useParams();
    const [data,setData]=useState({id:'',date:'',variety:'',gender:'',place:'',img:''})
    useEffect(async()=>{
        const res = await axios.post('/api/detail',null,{
            params:{
                'user_id':id
            }
        }).then((response)=>{
            console.log(response.data.data[0])
            const _inputData={
                id:response.data.data[0].id,
                date:response.data.data[0].date,
                variety:response.data.data[0].variety,
                gender:response.data.data[0].gender,
                place:response.data.data[0].place,
                img:response.data.data[0].img
            }
            setData(_inputData)
        })
        
    },[])
    return(
        <>
            <h2>Animal {id}</h2>
            
            <img className="small" src={"/images/"+data.img}/>
            {data.id}
            {data.date}
            {data.variety}
            {data.place}
            {data.gender}
        </>
    )
}