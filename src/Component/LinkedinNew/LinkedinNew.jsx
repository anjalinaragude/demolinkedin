import React, { useState } from 'react';
import { TbSquareLetterI } from "react-icons/tb";

const LinkedinNew = () => {
    const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
       <div className="bg-white">
              <div className=" d-flex justify-content-around align-items-center">
                <span className="span">
                  <b>Linkedin News</b>
                </span>
                <TbSquareLetterI />
              </div>
              <ul>
                {showMore?(
                <div><li className="d-flex flex-coloum">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Finance Seeks fresh talent </b>
                  </span>
                  <span className=""> 3 day ago .451 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li></div>
                ):(
                <div> <li className="d-flex flex-coloum">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Finance Seeks fresh talent </b>
                  </span>
                  <span className=""> 3 day ago .451 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="d-flex flex-coloum">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Finance Seeks fresh talent </b>
                  </span>
                  <span className=""> 3 day ago .451 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                <li className="">
                  <span>
                    <b> Hydrabad placements here to stay </b>
                  </span>
                  <span className=""> 1 day ago .771 readers</span>
                </li>
                </div>)}
               
              </ul>
              <div className="p-1 px-3">
                <button className="border-0 " onClick={toggleShowMore}> {showMore ? "Show less" : "Show more"}</button>
              </div>
            </div>
    </div>
  );
}

export default LinkedinNew;
