import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg, clearImg } from "../store/slices/imageSlice";
import "../Component/Profile/ProfilePhoto.css";
const ProfilePhoto = () => {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.profilePhoto.img);

  const [isOpen, setIsOpen] = useState(false);
  const reff = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    dispatch(setImg(file));
  };

  const handleDelete = () => {
    dispatch(clearImg());
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    // Functionality when the 'Edit' button is clicked
    // Example functionality:
    alert("Edit button clicked!");
  };

  const handleAdd = () => {
    // Functionality for adding a photo
    // Access the file input element using the ref and trigger a click on it
    reff.current.click();
  };

  return (
    <div className="profile-popup">
      {/* Your component code */}
      <div className="update-popup">
        <div className=""></div>

        <div className="element">
          <img
            src="img/post.jpg"
            width={"900"}
            height={200}
            alt=""
            className="backgroundImg"
          />

          <div onClick={togglePopup}>
            {img ? (
              <img
                src={URL.createObjectURL(img)}
                className="profileImg"
                width={24}
                height={24}
              />
            ) : (
              <img
                src="img/profile2.jpg"
                className="profileImg"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
        <button onClick={handleClick} className="edit-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            {/* SVG path */}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="popup2">
          <div className="popup-content">
            <h3>Profile Photo</h3>
            <button onClick={togglePopup} className="popup-btn">
              X
            </button>
          </div>

          <div className="popup-img">
            {img ? (
              <img
                src={URL.createObjectURL(img)}
                className="profileImg"
                width={24}
                height={24}
              
                
                
              />
            ) : (
              <img
                src="img/profile2.jpg"
                className="profileImg"
                
                width={24}
                height={24}
              
              />
            )}
          </div>
          <div className="save-btn">
            <div className="d-flex flex-column align-items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-camera"
                viewBox="0 0 16 16"
              >
                {/* SVG path */}
              </svg>
              <button onClick={handleAdd} className="add-btn">
                Add photo
              </button>
            </div>
            <input
              type="file"
              ref={reff}
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <div className="d-flex flex-column align-items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                {/* SVG path */}
              </svg>
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>

          {/* Add your profile editing components here */}
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
