import React from "react";

export default function Cruser(props) {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div class="carousel-item active ">
            <img src="https://source.unsplash.com/1600x720/?coding" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                <p>Hey!!! I am Shivansh Shukla</p> <p> VIT BHOPAL University</p>
                <p>I am a Full Stack MERN Developer</p>
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/1600x720/?computer"
              class="d-block w-100"
              alt=""
            />{" "}
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                <p>Hey!!! I am Shivansh Shukla</p> <p> VIT BHOPAL University</p>
                <p>I am a Full Stack MERN Developer</p>
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/1600x720/?engineer"
              class="d-block w-100"
              alt=""
            />{" "}
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                <p>Hey!!! I am Shivansh Shukla</p> <p> VIT BHOPAL University</p>
                <p>I am a Full Stack MERN Developer</p>
              </h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
