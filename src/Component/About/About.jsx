import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbout } from "../../store/slices/aboutSlice";
import Popup from "../Skill/Popup/Popup";
import { FiEdit2 } from "react-icons/fi";



const About = () => {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.about);

  const [editPopup, setEditPopup] = useState(false);
  const [editAboutText, setEditAboutText] = useState(about);

  function handleUpdateAbout() {
    dispatch(setAbout(editAboutText));
    setEditPopup(false);
  }

  return (
    <div className="">
      <main>
        <div className="heading d-flex justify-content-between align-items-center">
          <h1> About</h1>
          <button onClick={() => setEditPopup(true)} className="border-0 bg-white">
            <FiEdit2/>
          </button>
        </div>

        {editPopup && (
          <Popup trigger={editPopup} setTrigger={setEditPopup}>
            <div className="form">
              <h3>Edit About</h3>
              <label>About*:</label>
              <br />
              <textarea
                className="input-form"
                value={editAboutText}
                onChange={(e) => setEditAboutText(e.target.value)}
              />
              <br />
              <br />
              <button onClick={handleUpdateAbout}>Update</button>
              <button onClick={() => setEditPopup(false)}>Cancel</button>
            </div>
          </Popup>
        )}

        <div>
          <p>{about}</p>
        </div>
      </main>
    </div>
  );
};

export default About;
