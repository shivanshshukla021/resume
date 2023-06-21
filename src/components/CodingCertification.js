import React from "react";
import Navbar from "./Navbar";
import Codingcom from "./Codingcom";
import Certificatecom from "./Certificatecom";
import Cruser4 from "./Cruser4";

export default function CodingCertification() {
  return (
    <>
      <Navbar />
      <Cruser4 />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "  black",
        }}
      >
        {" "}
      </div>
      <Codingcom
        title2="Problem Solver - Silver Badge"
        des2="Daily Streak - Gold Badge"
        d2="
        Contest Contender - Bronze Badge"
        title1="100+ Problems Solved"
        des1="5 STAR in CPP PYTHON"
        de1="2 STAR in JAVA"
      />

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "  black",
        }}
      >
        {" "}
      </div>
      <Certificatecom
        title1="AWS Certified Cloud practitioner, May 2023"
        title2="The Bits and Bytes of Computer Networking Google Design, Nov 21
      "
      />
    </>
  );
}
