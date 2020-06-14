import React from "react";
import "./Person.css";

const Person = ({ data }) => {
  return (
    <div className="person">
      <img className="Img_person" src={data.image} alt="person" />
      <p className="name"> {data.name}</p>
      <p> {data.jobTitle}</p>
    </div>
  );
};

export default Person;
