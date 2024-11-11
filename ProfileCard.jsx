import React from "react";
import logo from "./src/assets/react.svg"

const ProfileCard = () => {
  const element = (
    <div>
      <h1>Name</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem unde,
        sit omnis vel, molestias beatae quaerat iusto quasi voluptates labore
        obcaecati perspiciatis, minus consequuntur! Vitae debitis voluptates
        officiis autem odit?
      </p>
      <img src={logo} alt="" />
    </div>
  );
  return <div>{element}</div>;
};

export default ProfileCard;
