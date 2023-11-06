import React, { useState, useRef, useContext } from "react";
import EditInfo from "./EditInfo";
// import EditInformationPopup from "./EditInformationPopup";
import "../Component/Profile/Profile.css";
import { MyProvider } from "./Hook/MyProvider";
import '../Component/Profile/ProfilePhoto.css'
const ProfilePhoto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reff = useRef(null);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [img, setImg] = useState("");
  const [edit, setEdit] = useState(false);
  //   const handleScroll = (e) => {
  //     setScrollPosition(e.target.scrollTop);
  //   };

  function handleChange(e) {
    const file = e.target.files[0];
    setImg(file);
  }
  function handleAdd() {
    reff.current.click();
  }
  function handleDelete() {
    setImg(null); // Clear the image
  }
  //   function toggleEditInfoPopup() {
  //     setEdit(!edit);
  //   }
  const [person, setperson] = useState({
    firstname: "John",
    lastname: "john@example.com",
    country: "United States",
    city: "New York",
    additional: "Additional Name",
    education: "Bachelor's Degree",
    // showEducation: true
  });
  let [status, setstatus] = React.useState(false);

  function handleClick() {
    setstatus(!status);
  }
  const userData = useContext(MyProvider);
  console.log(userData);
  return (
    <div className="profile-popup ">
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
              <img src={URL.createObjectURL(img)} className="profileImg" />
            ) : (
              <img src={userData.img} className="profileImg" />
            )}
          </div>
        </div>
        <button onClick={handleClick} className="edit-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
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
              <img src={URL.createObjectURL(img)} className="profileImg" />
            ) : (
              <img src={userData.img} className="profileImg" />
            )}
          </div>
          <div className="save-btn">
            <div className="d-flex flex-column align-items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-camera"
                viewBox="0 0 16 16"
              >
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
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
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>

          {/* Add your profile editing components here */}
        </div>
      )}
      <div>
        <div className="p-5">
          <div className="details p-3 d-flex justify-content-between">
            <div>
              <h4>
                {" "}
                {person.firstname}
                {person.lastname}
              </h4>

              <p> {person.additional}</p>
              <p> {person.city}</p>
              <p>{person.country}</p>
            </div>
            <div>
              <p> {person.education}</p>
            </div>
          </div>
          <div>
            {/* {!status ? <button onClick={handleClick}>Edit </button> : null} */}
          </div>
        </div>
        {status ? (
          <EditInfo
            details={person}
            fn={setperson}
            statusfn={setstatus}
            status={status}
          />
        ) : null}
      </div>
      {/* {edit && <EditInformationPopup onClose={toggleEditInfoPopup} />} */}
    </div>
  );
};

export default ProfilePhoto;
