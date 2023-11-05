import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';

import Learning from './Learning';
import Home from './Home/Home';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showHome,setShowHome]=useState(false)
  const localSignUp=localStorage.getItem("signin")

  useEffect(()=>{
    if(localSignUp){
      setShowHome(true)
    }

  },[localSignUp])
  const handleSignIn =(e) => {
    e.preventDefault();
    if(email&&password)
    {
      localStorage.setItem("email",email)
      localStorage.setItem("password",password)
      localStorage.setItem("signin",email)
      alert("Successfully login")
      window.location.reload()
    }
console.log(email,password)
    
    // if()

    
    // Make an API request to your server to validate the email and password
  
  }
  return (
    <div>
      {showHome ? <Home/>:<div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      </div>
}
    </div>
  );
}

export default SignInForm;
