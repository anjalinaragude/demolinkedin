import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home/Home";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (email && password && name) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("signin", email);
      alert("Successfully logged in");
      window.location.reload("/");
      // Remove the window reload and navigate directly
      navigate("/home");
    }
  };

  return (
    <div>
      {showHome ? (
        <Home />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 pt-5">
              <h1 className="heading">
                Welcome to Your Professional community
              </h1>
              <label>Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                style={{ width: "400px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <label>Email or phone</label>
              <br />
              <input
                type="email"
                className="form-control"
                style={{ width: "400px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                style={{ width: "400px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <Link to="/home">
                {" "}
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill"
                  style={{ width: "400px" }}
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
