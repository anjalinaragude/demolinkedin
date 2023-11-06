import React, { useContext } from 'react';
import { MyProvider } from '../Hook/MyProvider';
import { GrNotes } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
const SearchPost = () => {
    const userData = useContext(MyProvider);
  return (
    <div>
       <div className="ProfileImg  d-flex align-items-center">
                    <img
                      src={userData.img}
                      alt=""
                      width={80}
                      height={80}
                      className="rounded-pill p-2"
                    />

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
