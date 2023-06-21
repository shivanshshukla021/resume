import React from "react";
import CardProject from "./CardProject";
import Navbar from "./Navbar";
import Cruser2 from "./Cruser2";

export default function Project() {
  return (
    <>
      <Navbar />
      <Cruser2 />

      <CardProject
        title="Animal HealthCare"
        title2="Live News"
        title3="WhatsApp Reminder App"
        des1="Animal healthcare is an environment for animals that helps us to provide all the facilities to
        animals at one place.
       
        Using = HTML/CSS/JavaScript/React-JS/Express-JS/MongoDB."
        des2="Live news that is directly from Times Of India server. Using = :Html/CSS/JavaScript/Bootstrap/Node-JS/React-JS/MongoDB"
        des3="Created a reminder app where you can add a reminder on a particular time.
        Using = MongoDB/React-JS/Express-JS/Node-JS"
      />
    </>
  );
}
