import React from "react";
import { personData } from "../personData";
import Person from "../Person/Person";
import "./Masters.css";
import IMG_Master from "../../assets/images/Group 925.png";

const Masters = () => {
  return (
    <div className="container masters">
      <img className="img_master" src={IMG_Master} alt="name" />
      <div className="person-holder">
        {personData.list.map((item, id) => (
          <Person data={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Masters;
