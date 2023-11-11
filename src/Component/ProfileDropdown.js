import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";

const ProfileDropdown = () => {
  const img = useSelector((state) => state.profilePhoto.img);
  const { userData } = useSelector((s) => s.user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
    // alignItems: 'center',       // Center items vertically
    justifyContent: "center",
    padding: "10px",
  };

  const contentStyle = {
    display: isOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    width: "300px", // Adjust the width as needed
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const handleLogout = () => {
    navigate("/signin");
    dispatch(logout());
    // localStorage.removeItem('signin');
    // localStorage.removeItem("email")
    // localStorage.removeItem("password")
    // window.location.reload("/");
    // You may also want to redirect the user to the login page or perform other actions after logout.
  };

  return (
    <>
      <div onClick={toggleDropdown}>
        <img
          src={
            img
              ? URL.createObjectURL(img)
              : userData?.profilePicture || "img/profile2.jpg"
          }
          className="rounded-pill"
          width={24}
          height={24}
        />
      </div>

      <div className="d-none d-sm-block">
        <button onClick={toggleDropdown} className="bg-white border-0">
          Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
        <div style={dropdownStyle}>
          {isOpen && (
            <div style={contentStyle} className="profile-dropdown-content">
              <div style={columnStyle}>
                <div className="d-flex justify-content-around align-items-center">
                  {/* <img
                  src="img/profile2.jpg"
                  alt="User Avatar"
                  className="rounded-pill"
                  style={{ width: '52px', height: '52px' }}
                /> */}
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt=""
                      width={52}
                      height={52}
                      className="profile1Img rounded-pill"
                    />
                  ) : (
                    <img
                      src={userData?.profilePicture}
                      alt=""
                      width={80}
                      height={80}
                      className="profile1Img rounded-pill"
                    />
                  )}
                  <div>
                    <p>{userData?.username}</p>
                    <p className="fw-100">{userData?.role}</p>
                  </div>
                </div>
                {/* <div>
                <ProfilePhoto/>
              </div> */}
                {/* <button type='button' onClick={handleClick}>View Profile</button> */}
                <Link to="/profile">
                  <button
                    className="bg-white border border-primary rounded-4"
                    style={{ width: "270px" }}
                  >
                    View Profile
                  </button>
                </Link>
                <hr />

                <Link to="/settings">Settings</Link>
                <hr />
                <div>
                  <button
                    onClick={handleLogout}
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    {" "}
                    <Link to="/signin">Logout</Link>{" "}
                  </button>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
