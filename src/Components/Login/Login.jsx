import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth, Firestore } from '../../firebase/config'
import { AuthContext } from '../../store/context';
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const {user,setUser } = useContext(AuthContext)

    
    

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // setUser(user)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }



    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={(e) => handleLogin(e)}>
                    <label>Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="lname"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type='submit' >Login</button>
                </form>
                <a onClick={() => navigate('/signup')}>Signup</a>
            </div>
        </div>
    );
}

export default Login;
