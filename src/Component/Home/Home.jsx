// import NavBar from "../NavBar/NavBar";
import { useContext, useState } from "react";
import "../Home/Home.css";
import Post from "../Post/Post";
import { Posts } from "../../Data";
import Recommanded from "../Recommanded/Recommanded";
import LinkedinNew from "../LinkedinNew/LinkedinNew";
import Advertsement from "../Advertisement/Advertsement";
import SearchPost from "../SearchPost/SearchPost";
import Recent from "../Recent/Recent";
import HomeProfile from "../Profile/HomeProfile";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-md-2  col-lg-2   ">
            <HomeProfile />

            <Recent />
          </div>

          <div className="col-md-6 col-lg-6  mx-2">
            <div className="">
              <div className="row ">
                <div className="col-md-12 bg-white rounded-4 ">
                  <SearchPost />
                </div>
                <hr className="m-3" />
                <div className="col-md-12 bg-white rounded-4 ">
                  <div>
                    <span className="">Recommanded for you </span>
                    <Recommanded />

                    <hr />
                    <Recommanded />
                  </div>
                </div>

                <div className="col-md-12 bg-white rounded-4 my-2">
                  <div>
                    <div className="feed">
                      <div className="feedWrapper">
                        {/* <Share/> */}
                        {Posts.map((p) => (
                          <Post key={p.id} post={p} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
