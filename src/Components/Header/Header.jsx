import React, { useContext } from 'react';
import {signOut } from "firebase/auth";
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/context';
import {auth} from '../../firebase/config'
import { useNavigate } from 'react-router-dom';

function Header() {

  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const LogoutHandle = ()=>{
    signOut(auth).then(()=>{
      setUser(null)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
         {user ?  <div class="dropdown">
            <button class=" dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
            {user.displayName}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" onClick={LogoutHandle} >Logout</a></li>
            </ul>
          </div> : <span style={{cursor:'pointer'}} onClick={()=>navigate('/login')}>Login</span>}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
