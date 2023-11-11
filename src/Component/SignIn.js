import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "../store/slices/userSlice";
import { Users } from "../Data";

const SignIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const   {isLoggedIn} = useSelector((s)=>s.user)
  const [allUser, setAllUser] = useState([])
   

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const selectedUser = allUser.find((item)=>item?.email === email)
    if(selectedUser && selectedUser?.password===password) {
      localStorage.setItem("signin", JSON.stringify(selectedUser))
      dispatch(setLoginData(selectedUser))
      alert("Successfully logged in");
      navigate("/home");
    } else {
      setError("Invalid Credential !")
    }
  };

  useEffect(()=>{
    const data = Users
    setAllUser(data)
  },[])

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 pt-5">
              <h1 className="heading">
                Welcome to Your Professional community
              </h1>
              {/* <label>Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                style={{ width: "400px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
              <br />
              <h6 className="text-danger py-2" >{error}</h6>
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
    </div>
  );
};

export default SignIn;
