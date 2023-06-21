import React from "react";
import Navbar from "./Navbar";
import Educatoncomp from "./Educatoncomp";
import Cruser3 from "./Cruser3";

export default function Education() {
  return (
    <>
      <Navbar />
      <Cruser3 />

      <Educatoncomp
        title1="VIT BHOPAL"
        title2="Kiddyes Corner School"
        title3="Delhi Public School"
        des1="B-Tech Computer Science"
        des2="12th "
        des3="10th"
        de1="8.10 CGPA"
        de2="78.8%"
        de3="82%"
        d1="2020-Ongoing"
        d2="2020"
        d3="2018"
      />
    </>
  );
}
