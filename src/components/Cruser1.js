import React from "react";

export default function Cruser1(props) {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div
            class="carousel-item active "
            style={{ height: "100", width: "1000px" }}
          >
            <img src="https://source.unsplash.com/1600x300/?student" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                About Me
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
