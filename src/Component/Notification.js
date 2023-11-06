import { Link } from "react-router-dom";
import Advertsement from "./Advertisement/Advertsement";
import { useState } from "react";
const Notification = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxStyle = {
    backgroundColor: isHovered ? "rgb(207, 203, 202)" : "#ffffff", // Change colors as needed
    color: "#fff",
    padding: "20px",
    transition: "background-color 0.3s", // Adding transition for smooth color change
  };
  return (
    <div>
      <div className="container ">
        <div className="row   ">
          <div className="col-md-2 ">
            <div className=" grid gap-0 column-gap-3 ">
              <div className="p-2 g-col-8 my-3 bg-white">
                <div>
                  <h5>Manage your</h5>
                  <h5>Notification</h5>
                  <p>
                    <Link to="/setting">view Setting</Link>
                  </p>
                </div>
              </div>

              {/* <div className="p-2 g-col-4 my-3 bg-white">fgf</div> */}
              {/* <div className="p-2 g-col-4 my-3 bg-white">ghg</div> */}
            </div>
          </div>
          <div className="col-md-7 ">
            <div className=" grid gap-0 column-gap-3 ">
              <div className="p-2 g-col-8 my-3 bg-white">
                <div className="d-flex p-3 ">
                  <div className="me-3">
                    <button className="text-white rounded-pill bg-success border border-dark-subtle">
                      All
                    </button>
                  </div>
                  <div className="me-3">
                    <button className="bg-white rounded-pill border border-dark-subtle">
                      My Posts
                    </button>
                  </div>
                  <div className="me-3">
                    <button className="bg-white rounded-pill border border-dark-subtle">
                      Mentions
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 g-col-4 my-3 bg-white">
                <div
                  class="card-body"
                  style={boxStyle}
                  onMouseOver={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="d-flex text-black">
                    <div className="pe-3">
                      <img src="/img/post.jpg " width={24} height={24} />
                    </div>
                    <div>
                      <p>
                        {" "}
                        <b>HTC Global Services </b> posted: A tribute to our
                        leeader and manager who enrich our professional journey
                        with their support.#Mention...
                      </p>
                    </div>
                    <div>
                      <span>9m</span>
                      <span>...</span>
                    </div>
                  </div>
                </div>
                <div
                  class="card-body"
                  style={boxStyle}
                  onMouseOver={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="d-flex text-black">
                    <div className="pe-3">
                      <img src="/img/post.jpg " width={24} height={24} />
                    </div>
                    <div>
                      <p>
                        {" "}
                        <b>HTC Global Services </b> posted: A tribute to our
                        leeader and manager who enrich our professional journey
                        with their support.#Mention...
                      </p>
                    </div>
                    <div>
                      <span>9m</span>
                      <span>...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="grid gap-0 column-gap-3 ">
              <div className="p-2 g-col-8 my-3 bg-white">
                <Advertsement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notification;
