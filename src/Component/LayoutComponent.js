import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "../store/slices/userSlice";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from "./NavBarComponent";
import HeaderComponent from "./HeaderComponent";
import Articles from "./Articles";
import SignIn from "./SignIn";
import Learning from "./Router/Learning";
import LoginForm from "./Auth/Login/LoginForm";
import Home from "./Home/Home";
import MyNetwork from "./Router/MyNetwork";
import Messaging from "./Router/Messaging";
import Profile from "./Profile";
import Recent from "./Recent/Recent";
import SearchPost from "./SearchPost/SearchPost";
import Notification from "./Router/Notification";

const LayoutComponent=()=>{
  const localSignUp = localStorage.getItem("signin");
  const dispatch = useDispatch();
  const userData = JSON?.parse(localSignUp)
 const   { isLoggedIn} = useSelector((s)=>s.user)

  useEffect(()=>{
    if(!isLoggedIn){
      dispatch(setLoginData(userData))
    }
  },[userData])

    return(
        <div>
       <Router>
            {isLoggedIn ? <NavBarComponent /> : <HeaderComponent />}
            {userData?.email ? <div>
              <Routes>
                <Route path="/articles" element={<Articles />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route path='/' element={<Home />}></Route>
                <Route path='/mynetwork' element={<MyNetwork />}></Route>
                <Route path='/message' element={<Messaging />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/mynetwork' element={<Recent />}></Route>
                <Route path='/profile' element={<SearchPost />}></Route>
                <Route path='/notification' element={<Notification />}></Route>
              </Routes>
            </div> : <SignIn />}

          </Router>
       </div>  
      )
}
export default LayoutComponent;