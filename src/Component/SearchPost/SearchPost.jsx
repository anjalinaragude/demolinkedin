import { GrNotes } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../SearchPost/SearchPost.css";
import { useState } from "react";
import { addPost } from "../../store/slices/postSlice";
import { Button, Modal } from "react-bootstrap";
const SearchPost = () => {
  const img = useSelector((state) => state.profilePhoto.img);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postVideo, setPostVideo] = useState(null);

  const handlePost = () => {
    dispatch(
      addPost({
        desc: postContent,
        video: postVideo,
        image: postImage,
        date: new Date(),
        like: 0,
        comment: 0,
        userProfilePicture: "img/profile2.jpg",
        username: "Anjali redd",
      })
    );
    setPopupOpen(false);
    setPostContent("");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImage(file);
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setPostVideo(file);
  };

  return (
    <div>
      <div className="ProfileImg  d-flex align-items-center p-2">
        <Link to="/profile">
          <img
            src={img ? URL.createObjectURL(img) : "img/profile2.jpg"}
            alt="Profile"
            className="profile1Img rounded-pill"
            width={54}
            height={54}
          />
        </Link>
        <div className="inputProfile px-2" style={{ width: "100%" }}>
          <input
            type="text"
            className="inputpost rounded-pill"
            placeholder=" Start a post"
            onClick={() => setPopupOpen(!isPopupOpen)}
          />

          {/* {isPopupOpen && (
            <div className="search-popup">
              <button onClick={() => setPopupOpen(!isPopupOpen)}>
                Close Popup
              </button>

              <div>
                <textarea
                  onChange={(e) => setPostContent(e.target.value)}
                  className="search-title"
                  placeholder="What do you want to talk about?"
                />
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                />
              </div>
              <div>
                <button onClick={handlePost}>post</button>
              </div>
            </div>
          )} */}

          <Modal
            show={isPopupOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                {/* Modal heading */} Create the post
              </Modal.Title>
              <Button onClick={() => setPopupOpen(false)}>Close</Button>
            </Modal.Header>
            <Modal.Body>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <textarea
                  onChange={(e) => setPostContent(e.target.value)}
                  className="search-title"
                  placeholder="What do you want to talk about?"
                />
                <div className="py-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                />

                <div className="text-end py-2">
                  <Button onClick={handlePost}>post</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="p-2">
          <MdPermMedia />
          <span className="px-2">Media</span>
        </div>
        <div className="p-2">
          <BsCalendarEvent />
          <span className="px-2">Event</span>
        </div>
        <div className="p-2">
          <GrNotes />
          <span> Write article</span>
        </div>
      </div>
    </div>
  );
};

export default SearchPost;
