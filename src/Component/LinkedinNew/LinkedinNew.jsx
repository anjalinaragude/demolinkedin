import React, { useState } from "react";
import { TbSquareLetterI } from "react-icons/tb";

const LinkedinNew = () => {
  const [count, setCount] = useState(2)
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const newsData = [
    {
      id: 1,
      title: "Hydrabad placements here to stay",
      description: "1 day ago .771 readers",
    },
    {
      id: 2,
      title: "Finance Seeks fresh talent",
      description: " 3 day ago .451 readers",
    },
    {
      id: 3,
      title: "Hydrabad placements here to stay",
      description: "1 day ago .771 readers",
    },
    {
      id: 4,
      title: "Hydrabad placements here to stay",
      description: "1 day ago .771 readers",
    },
  ];

  return (
    <div className="bg-white">
      <div className="d-flex justify-content-between align-items-center p-2">
        <span className="span">
          <b>Linkedin News</b>
        </span>
        <TbSquareLetterI />
      </div>
      <ul>
        {newsData?.slice(0,count).map((item) => (
          <li>
            <div>
              <h6>{item?.title}</h6>
              <span>{item?.description}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-1 px-3">
        <button className="border-0 " onClick={()=>{
          setShowMore(!showMore)
          if(count < newsData?.length){
            setCount(newsData?.length)
          } else{
            setCount(2)
          }
        }}>
          {" "}
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default LinkedinNew;
