import React, { useState } from 'react';
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { GoHash, GoTriangleUp } from 'react-icons/go'
import { MdGroups2 } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import Advertsement from '../Advertisement/Advertsement';

const ManageNetwork = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="p-4">
        <h6>Manage of Network</h6>
        {showMore ?
          (

            <div>
              <div className="p-2 d-flex justify-content-between">
                <BsFillPeopleFill />
                < span>Connections</span>
                <span>39</span>
              </div>
            </div>
          ) :
          (
            <div>
              <div className="p-2 d-flex justify-content-between">
                <BsFillPeopleFill />
                < span>Connections</span>
                <span>39</span>
              </div>
              <div className=" p-2 d-flex justify-content-between" >
                <BsFillPersonFill />

                <span>Folling & followers</span>
                <span></span>
              </div>
              <div className=" p-2 d-flex justify-content-between" >
                <MdGroups2 />

                <span>Groups</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between" >
                <BsFillPersonFill />

                <span>Events</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between" >
                <TbNotes />

                <span>Pages</span>
                <span>20</span>
              </div>
              <div className="p-2  d-flex justify-content-between" >
                <BsFillPersonFill />

                <span>Newsletters</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between" >
                <GoHash />

                <span>Hashtag</span>
                <span>1</span>
              </div>
            </div>)
        }


        <button className="p-2 bg-white  border-0" onClick={toggleShowMore}> Show less <GoTriangleUp /></button>
        <hr></hr>

        <Advertsement />
        <hr />
      </div>
    </div>
  );
}
export default ManageNetwork;
