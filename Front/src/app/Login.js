import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {doSigninAsync,selectEmail,selectUserName,logout,selectToken,doSignupAsync, doSignOutAsync} from './loginSlice'

const Login = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    
    const [newUserName, setNewUserName] = useState("")
    const [newPwd, setNewPwd] = useState("")
    const [newEmail, setNewEmail] = useState("")
    return (
    <div>
        {userName && <div>User name: {userName}</div>}
        {email && <div> Email: {email}</div>}
        {token && <div> token: {token}</div>}
        <hr/>
        Login
        <button onClick={()=>dispatch(doSigninAsync({ username: newUserName, password: newPwd }))}>Login</button>
        <button onClick={()=>dispatch(doSignupAsync({ username: newUserName, password: newPwd,email:newEmail }))}>register</button>
        <button onClick={()=>dispatch(doSignOutAsync({token}))}>Logout</button>
        
      Name  <input onChange={(e)=>setNewUserName(e.target.value)}/>
      Pwd  <input onChange={(e)=>setNewPwd(e.target.value)} type='password'/>
      Email  <input onChange={(e)=>setNewEmail(e.target.value)}/>
    </div>
  )
}

export default Login