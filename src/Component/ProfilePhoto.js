import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg, clearImg, setBackgroundImg, clearBackgroundImg } from "../store/slices/imageSlice";
import "../Component/Profile/ProfilePhoto.css";


const ProfilePhoto = () => {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.profilePhoto.img);
  const backgroundImg = useSelector((state) => state.profilePhoto.backgroundImg);
  const [isOpen, setIsOpen] = useState(false);
  const reff = useRef();
  const reff1 = useRef();
  const [isBackgroundMode, setIsBackgroundMode] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    dispatch(setImg(file));
  };

  const handleChange1 = (e) => {
    const file1 = e.target.files[0];
    dispatch(setBackgroundImg(file1));
  };

  const handleDelete = () => {
    dispatch(clearImg());
  };

  const handleDelete1 = () => {
    dispatch(clearBackgroundImg());
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup1 = () => {
    setIsBackgroundMode(!isBackgroundMode);
  };

  const handleClick = () => {
    alert("Edit button clicked!");
  };

  const handleAdd = () => {
    reff.current.click();
  };

  const handleAdd1 = () => {
    reff1.current.click();
  };

  return (
    <div className="">


      <div className="element" onClick={togglePopup1}>
        <img
          src={backgroundImg ? URL.createObjectURL(backgroundImg) : "img/post.jpg"}
          alt="Background"
          className="popup-background-image p-2"
          width={790}
          height={200}
        />     
         </div>

      <div onClick={togglePopup}>
        <img
          src={img ? URL.createObjectURL(img) : "img/profile2.jpg"}
          alt="Profile"
          className="popup-profile-image"
          width={54}
          height={54}
        />
      </div>

      {isOpen && (
        <div className="popup2">
          <div className="popup-content2">
            <div className="d-flex justify-content-between edit-profile-image">
            <h3 className="">Edit Profile Photo</h3>
            <button onClick={handleAdd} className="edit-btn text-black">Add</button>
         
            </div>
            <img
              src={img ? URL.createObjectURL(img) : "img/profile2.jpg"}
              alt="Profile"
              className="popup-profile-image"
              width={42}
              height={42}
            />
            <hr/>
            <div className="d-flex justify-content-between align-items-center">
            <button onClick={handleDelete} className="edit-profile-img-btn">Remove Photo</button>
            <button onClick={togglePopup} className="edit-profile-img-btn">cancel</button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={reff}
              style={{ display: "none" }}
              onChange={handleChange}/>
            
             </div>
        </div>
      )}

      {isBackgroundMode && (
        <div className="popup3">
          <div className="popup-content3">


            <h3>Edit Background Photo</h3>
            <img
              src={backgroundImg ? URL.createObjectURL(backgroundImg) : "img/post.jpg"}
              alt="Background"
              className="popup-image"
              width={80}
              height={80}
            />
            <button onClick={handleDelete1}>Remove Photo</button>
            <button onClick={togglePopup1}>Close</button>
            <input
              type="file"
              accept="image/*"
              ref={reff1}
              style={{ display: "none" }}
              onChange={handleChange1}y
            />
            <button onClick={handleAdd1} className="edit-btn">Add1</button>

          </div>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        ref={reff}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  )
      }

export default ProfilePhoto;
