
import { GrNotes } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SearchPost = () => {
  
  const img = useSelector((state) => state.profilePhoto.img);

  return (
    <div>
       <div className="ProfileImg  d-flex align-items-center p-2">
       
                <Link to="/profile">
                  {img ? (
                    <img
                      src={URL.createObjectURL(img)}
                      alt=""
                      width={80}
                      height={80}
                      className="profile1Img rounded-pill"
                    />
                  ) : (
                    <img
                      src="img/profile2.jpg"
                      alt=""
                      width={80}
                      height={80}
                      className="profile1Img rounded-pill"
                    />
                  )}
                </Link>
              

                    <div className="inputProfile">
                      <input
                        type="text"
                        className="inputpost rounded-pill"
                        placeholder=" Start a post"
                      />
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
}

export default SearchPost;
