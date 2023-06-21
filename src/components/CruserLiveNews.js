import React from "react";
import Navbar from "./Navbar";

export default function CruserLiveNews(props) {
  return (
    <>
      <Navbar />
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div class="carousel-item active ">
            <img src="https://source.unsplash.com/1600x500/?news" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                Live News
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p>
        <h3>INTRODUCTION</h3>
        News website... live news directly from times of india servers..
        <h4>Technology Used</h4>
        <p>
          Html, css, bootstrap, javascript, jqueryexpress, mongodb, mongoose
          connecter, requests, postman
        </p>
        <h3>My Contribution</h3>
        <p>
          I am the self developer of the WebApp this was done in aim to get an
          app that can directly display news{" "}
        </p>
      </p>
    </>
  );
}
