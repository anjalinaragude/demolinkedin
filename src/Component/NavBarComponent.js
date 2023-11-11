import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProfileDropdown from "./ProfileDropdown";
import { useSelector } from "react-redux";

const NavBarComponent = () => {
  const img = useSelector((state) => state.profilePhoto.img);
  const { userData } = useSelector((s) => s.user);

  return (
    <div className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <div className="d-flex py-3 ">
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  fill="currentColor"
                  className="bi bi-linkedin mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" style={{height:"100%"}} >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 py-3 ">
            <div className="d-flex justify-content-around align-items-center">
              <div className="text-center" >
              <Link to="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                  <span className="d-none d-sm-block" >Home</span>
                  </Link>
                {/* </div> */}
              </div>
              <div className="text-center">
              <Link to="/mynetwork" className="text-decoration-none">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
                <span className="d-none d-sm-block" >My Network</span>
                
                </Link>{" "}
              </div>
              <div className="text-center">
              <Link to="/job" className="text-decoration-none">
                <div >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-suitcase-lg-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2H7ZM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6ZM3 13V3h1v10H3Zm9 0V3h1v10h-1Z" />
                  </svg>
                </div>
                <span className="d-none d-sm-block" >job</span>
                </Link>{" "}
              </div>
              <div className="text-center">
              <Link to="/message" className="text-decoration-none">

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                  </svg>
                </div>
                <span className="d-none d-sm-block" >Messaging</span>
                </Link>{" "}
              </div>

              <div className="text-center">
              <Link to="/notification" className="text-decoration-none">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </div>
                <span className="d-none d-sm-block" >Notification</span>
                </Link>{" "}
              </div>
              <div className="">
                 <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarComponent;
