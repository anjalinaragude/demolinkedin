// import NavBar from "../NavBar/NavBar";
import { useContext, useState } from "react";
import "../Home/Home.css";
import Post from "../Post/Post";
// import { Posts } from "../../Data";
// import Recommanded from "../Recommanded/Recommanded";
import LinkedinNew from "../LinkedinNew/LinkedinNew";
import Advertsement from "../Advertisement/Advertsement";
import SearchPost from "../SearchPost/SearchPost";
import Recent from "../Recent/Recent";
import HomeProfile from "../Profile/HomeProfile";
// import { useSelector } from "react-redux";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-12 col-md-2  col-lg-2   ">
            <HomeProfile />
            <Recent />
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="bg-white rounded-3 my-1 ">
              <SearchPost />
            </div>

            <div className="bg-white">
              <Post />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 ">
            <LinkedinNew />
            <Advertsement />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
