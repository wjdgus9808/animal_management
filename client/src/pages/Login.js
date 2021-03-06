import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        axios.post('/api/user_inform/onLogin',null,{
            params:{
                'user_id':inputId,
                'user_password':inputPw
            }
        })
        .then(res=>{
        //    console.log(res)
        //    console.log('res.data.userId :: ', res.data.userId)
        //    console.log('res.data.msg :: ', res.data.msg)
            if(res.data.userId === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.userId === null){
                // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            } else if(res.data.userId === inputId) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                sessionStorage.setItem('user_id', inputId)
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            document.location.href = '/'
        })
        .catch()
        setInputId('');
        setInputPw('');
    }
 

 
    return(
        <body width="100%" height="100%">
            <div className='loginForm'>
                <h2>Login</h2>
                <div className='idForm'>
                    <input className='id' type='text' placeholder='아이디' name='input_id' value={inputId} onChange={handleInputId} />
                </div>
                <div className='idForm'>
                    <input className='pw' type='password' placeholder='비밀번호' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
                <div>
                    <button type='button'  className="btn" onClick={onClickLogin}>Login</button>
                </div>
            </div>
        </body>
    )
}
 
export default Login;