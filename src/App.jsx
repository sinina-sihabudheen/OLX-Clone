import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './Pages/Signup'
import View from './Components/View/View';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { AuthContext } from './store/context';
import { auth } from '../src/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  // const auth = getAuth(Firebase)
  const {user,setUser } = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
      } else {
       console.log("logOut");
      }
    });
  }, [])

 
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
          <Route path='/viewpost' element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
