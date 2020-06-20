import React from "react";
import "./mainSession.css";
// import {data} from '../moc'
const MainSession = ({ data }) => {
  // console.log(data);
  return (
    <div className="container flex-mainsession">
      {data.image.map((item, i) => (
        <img className="IMG_main" src={item} key={i} alt="name" />
      ))}
      {data.text ? <p className="text-main"> {data.text} </p> : ""}
    </div>
  );
};

export default MainSession;
