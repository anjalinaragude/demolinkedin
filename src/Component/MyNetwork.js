

import Invitations from "./MyNetwork/Invitations";
import ManageNetwork from "./MyNetwork/ManageNetwork";
const MyNetwork = () => {
  return (
    <div>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-3 bg-white me-2">
            {/* <div className="p-4">
              <h6>Manage of Network</h6>
              <div className="p-2 d-flex justify-content-between">
                <BsFillPeopleFill />
                <span>Connections</span>
                <span>39</span>
              </div>
              <div className=" p-2 d-flex justify-content-between">
                <BsFillPersonFill />

                <span>Folling & followers</span>
                <span></span>
              </div>
              <div className=" p-2 d-flex justify-content-between">
                <MdGroups2 />

                <span>Groups</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <BsFillPersonFill />

                <span>Events</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <TbNotes />

                <span>Pages</span>
                <span>20</span>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <BsFillPersonFill />

                <span>Newsletters</span>
                <span></span>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <GoHash />

                <span>Hashtag</span>
                <span>1</span>
              </div>
              <button className="p-2 bg-white  border-0">
                {" "}
                Show less <GoTriangleUp />
              </button>
              <hr></hr>
              <Advertsement/>
            </div> */}
            <ManageNetwork/>
          </div>
          <div className="col-md-7 ">
            <Invitations/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyNetwork;
