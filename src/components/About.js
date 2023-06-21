import React from "react";
import Navbar from "./Navbar";
import Progress from "./Progress";
import Cruser1 from "./Cruser1";

export default function About() {
  return (
    <>
      <Navbar />
      <Cruser1 />
      <div className="container ">
        <p id="">Hi, my name is Shivansh Shukla, </p>
        <p> I am a student at VIT BHOPAL University. </p>
        <p>
          {" "}
          I have completed my tenth and twelveth grades at DPS Gwalior and
          Kiddyes Corner Public School in Gwalior.{" "}
        </p>
        <p>
          {" "}
          I am a full-stack web developer and am currently working on React JS
          development.{" "}
        </p>
        <p>
          {" "}
          I believe that perfection comes from a combination of hard work and
          smart work.{" "}
        </p>
        <p>
          {" "}
          Although I come from a middle-class background, I have always been
          able I believe that every success is a combination of all the lessons
          learned from previous failures and that failure is just a way to teach
          how to be perfect.{" "}
        </p>{" "}
        <p> I am an honest and a learner type of person.</p>
      </div>
      <div className="container my-3">
        <p id="">I am currently in my fourth year</p>
        <p> I am a five-start coder on HackerRank in c++, java, and python</p>
        <p> I also solved more than 350 questions on the CodeChef platform</p>
        <p> Currently, I am practicing data structures and algorithms.</p>
        <p>
          {" "}
          I have worked on many small projects over the course of four years,
          but I have also worked on three major projects in full-stack web
          development.
        </p>
        <p> I am an AWS Certified Cloud practitioner.</p>
      </div>
      <div className="container">
        <h2>Skills</h2>
      </div>
      <Progress />
    </>
  );
}
