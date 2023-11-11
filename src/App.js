// import logo from './logo.svg';
import './App.css'
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FooterComponent from './Component/FooterComponent';
import LayoutComponent from './Component/LayoutComponent';
import HeaderComponent from './Component/HeaderComponent';
import Articles from './Component/Articles';
import SignIn from './Component/SignIn';
import Learning from './Component/Router/Learning';

import Home from './Component/Home/Home';
import NavBarComponent from './Component/NavBarComponent';
import { useEffect, useState } from 'react';
import MyNetwork from './Component/Router/MyNetwork';
import Notification from './Component/Router/Notification';
import Messaging from './Component/Router/Messaging';
import Profile from './Component/Profile';
import Recent from './Component/Recent/Recent';
import SearchPost from './Component/SearchPost/SearchPost';
import LoginForm from './Component/Auth/Login/LoginForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [showHome, setShowHome] = useState(false)
  const localSignUp = localStorage.getItem("signin")

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true)
    }

  }, [localSignUp])


  return (
    <div className="">

      <Provider store={store}>

        <LayoutComponent >

          <Router>
            {showHome ? <NavBarComponent /> : <HeaderComponent />}
            {showHome ? <div>

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
        </LayoutComponent>
        <FooterComponent />
      </Provider>

    </div>
  );
}

export default App;
