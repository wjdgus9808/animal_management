import React from 'react';

function Main(props){
    const isLogin = props.isLogin
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
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Main;