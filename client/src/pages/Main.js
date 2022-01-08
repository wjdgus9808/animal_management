import React, { useEffect,  useState } from 'react';
import Navbar from './Navbar'
import ShowCrawl from '../components/ShowCrawl';
import Upload from './Upload'
import Search from './Search'
import Register from './Register'
import Detail from './Detail';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';
function Main(props){
    const isLogin = props.isLogin
   
   
    const onLogout=()=>{
        sessionStorage.removeItem('user_id')
        document.location.href='/'
    }
    return(
        <Router>
          <div className="App">
            <Navbar />
            <Switch>  
              <Route path="/uploads">
                <h1>검색하기</h1>
                <Upload />
              </Route>
              <Route path="/registers">
                <h1>등록하기</h1>
                <Register />
              </Route>
              <Route path="/" exact>
                <h1>홈</h1>
                <ShowCrawl />
                <div>
                  <button type='button' onClick={onLogout}>Logout</button>
                </div>
              </Route>
              <Route exact path="/detail/:id" component={Detail}/>
              <Route path="/search_result">
                <h1>결과</h1>
                <Search/>
              </Route>
              
            </Switch>  
          </div>
        </Router>
    )
}
export default Main;