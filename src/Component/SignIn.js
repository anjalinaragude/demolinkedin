import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home";
import React from "react";
import Home from "./Home/Home";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showHome, setShowHome] = useState(false);
    const localSignUp = localStorage.getItem("signin");
    const navigate = useNavigate();

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }
    }, [localSignUp]);

    const handleSignIn = (e) => {
        e.preventDefault();
        
  
   
  
        if (email && password) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("signin", email);
            alert("Successfully logged in");
            window.location.reload("/");
            navigate("/");
        }
        console.log(email, password);
    };

    const customStyle = {
        fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif",
        fontSize: '48px',
        fontWeight: 200,
    };

    const backgroundimg = {
        backgroundImage: "url(https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4)", /* The image used */
        /* Used if the image is unavailable */
        height: "500px", /* You must set a specified height */
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover"
    };

    return (
        <div>
            {showHome ? (
                <Home/>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 pt-5">
                            <h1 className="heading" style={customStyle}>Welcome to Your Professional community</h1>
                            <label>Email or phone</label>
                            <br />
                            <input type="email" className="form-control" style={{ width: '400px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br /><br />
                            <label>Password</label>
                            <br />
                            <input type="password" className="form-control" style={{ width: '400px' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br /><br />
                            <Link to="/home">
                                <button type="button" className="btn btn-primary rounded-pill" style={{ width: '400px' }} onClick={handleSignIn}>Sign In</button>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 pt-5" style={backgroundimg}>
                            {/* Additional content or repeated structure */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;
