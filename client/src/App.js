import axios from "axios";
import {useEffect, useState} from "react";
import "./App.css";
import Users from './test2.js'
import Login from './Login'
function App(){
  const [isLogin,setIsLogin]= useState(false)
  useEffect(()=> {
    if(sessionStorage.getItem('user_id')===null){
      console.log('isLogin??::',isLogin)
    }
  })
  return <div className="App">
            <Login/>
         </div>;
   
}

export default App;