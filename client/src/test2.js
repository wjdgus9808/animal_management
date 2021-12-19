import axios from "axios";
import { useEffect, useState } from "react"

const Users=()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('/api/products').then(res=>{
         //   console.log(res.data)
            setUsers(res.data);
        });
    },[]);
    
    useEffect(()=>{
        console.log(users)
    },[users])
    return(
    <div>
        {users.data?.map(user=>{ //첫턴에 데이터가 아직 안들어오면 그 데이터는 undefined
            return (<div key={user.PersonID}>
                {user.LastName}
            </div>)
        })}
    </div>
    );
};
export default Users