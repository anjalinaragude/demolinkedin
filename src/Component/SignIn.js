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
  const { isLoggedIn } = useSelector((s) => s.user);
  const [allUser, setAllUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const selectedUser = allUser.find((item) => item?.email === email);
    if (selectedUser && selectedUser?.password === password) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem("signin", JSON.stringify(selectedUser));
        dispatch(setLoginData(selectedUser));
        alert("Successfully logged in");
        navigate("/home");
      }, 1000);
    } else {
      setError("Invalid Credential !");
    }
  };

  useEffect(() => {
    const data = Users;
    setAllUser(data);
  }, []);

  const cover_img = {
    background:
      "url(https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAF28luld64NDRCi0l6N4Bki57w.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5 pt-5 ">
            <h1 className="heading">Welcome to Your Professional community</h1>

            <br />
           {error && <div class="alert alert-danger" role="alert">
              {error}
            </div> } 
            <label>Email or phone</label>
            <br />
            <input
              type="email"
              className="form-control"
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
                style={{ width: "100%" }}
                onClick={handleSignIn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border text-dark" role="status"></div>
                ) : (
                  "Sign In"
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
