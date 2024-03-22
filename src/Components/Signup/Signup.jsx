import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import {auth,Firestore} from '../../firebase/config'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';


export default function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {auth} = useContext(FirebaseContext)
    const [err,setErr] = useState(null)


    const handleSubmit= (e)=>{

        e.preventDefault()
        console.log(email,password);

        if(!email){
            setErr('Invalid email format')
            return
          }else if(username && username.length < 4){
            setErr('name must be at least 4 character')
            return
          }else if(phone && phone.length < 10){
            setErr('Phone must be at least 10 character')
            return
          }else if(password && password.length < 6){
            setErr('Password must be at least 6 character')
            return
          }
          console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password).then((result)=>{
            const user = result.user;
            updateProfile(user,{displayName:username}).then(()=>{
              const userCollection = collection(Firestore,"users")
              addDoc(userCollection,{
                id:user.uid,
                name:username,
                phone:phone
              })
              .then(()=>{
                navigate('/login')
              }).catch((err)=>{
                setErr(err.message)
               })
              
            })
          })
    }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
           
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
           
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
           
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a onClick={()=>navigate('/login')}>Login</a>
        { err ? <span style={{color:'red'}}>{err}</span> : ''}

      </div>
    </div>
  );
}

