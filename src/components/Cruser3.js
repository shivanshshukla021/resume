import React from "react";

export default function Cruser3(props) {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div
            class="carousel-item active "
            style={{ height: "100", width: "1000px" }}
          >
            <img src="https://source.unsplash.com/1600x300/?education" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                Education Section
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
