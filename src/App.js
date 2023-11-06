// import logo from './logo.svg';
import './App.css'
// import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import FooterComponent from './Component/FooterComponent';
import LayoutComponent from './Component/LayoutComponent';
import HeaderComponent from './Component/HeaderComponent';
import Articles from './Component/Articles';
import SignIn from './Component/SignIn';
import Learning from './Component/Learning';
import SignInForm from './Component/SignInForm';
import Home from './Component/Home/Home';
import NavBarComponent from './Component/NavBarComponent';
import { useEffect, useState } from 'react';
import MyNetwork from './Component/MyNetwork';
import Massaging from './Component/Messaging';
import Job from './Component/Job';
import Notification from './Component/Notification';
import Messaging from './Component/Messaging';
import Profile from './Component/Profile';
import ProfileDropdown from './Component/ProfileDropdown'
import { MyProvider } from './Component/Hook/MyProvider';
import useProfile from './Component/Hook/useProfile';
import Recent from './Component/Recent/Recent';

function App() {
  const [showHome,setShowHome]=useState(false)
  const localSignUp=localStorage.getItem("signin")
  
  useEffect(()=>{
      if(localSignUp){
        setShowHome(true)
      }
  
    },[localSignUp])

    const {userData,setUserData}=useProfile()
  return (
    <div className="">
      <MyProvider.Provider  value={userData} >

     
      <LayoutComponent >

      <Router>
        {showHome?<NavBarComponent/>:<HeaderComponent/>}
        {showHome?<div>
      
      <Routes>
          <Route path="/articles" element={<Articles/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/learning" element={<Learning/>} />
          
          <Route path="/home" element={<Home/>} />
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mynetwork' element={<MyNetwork/>}></Route>
          <Route path='/message' element={<Messaging/>}></Route>
          {/* <Route path='/job' element={<Job/>}></Route> */}
         <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/mynetwork' element={<Recent/>}></Route>
        
           
          <Route path='/notification' element={<Notification/>}></Route>
      </Routes>
    </div>:<SignIn/>}
      		
    	</Router>
      </LayoutComponent>
      <FooterComponent/>
      </MyProvider.Provider>
    </div>
  );
}

export default App;
