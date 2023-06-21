import React from "react";

export default function Progress() {
  return (
    <>
      {" "}
      <div className="container">
        React-Js
        <div
          class="progress my-3"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar " style={{ width: "75%" }}></div>
        </div>
        Java
        <div
          class="progress my-3"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar " style={{ width: "75%" }}></div>
        </div>
        C++
        <div
          class="progress my-3"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar "
            style={{ width: "80%", height: "20px" }}
          ></div>
        </div>
        DSA
        <div
          class="progress my-3"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style={{ width: "75%" }}></div>
        </div>
      </div>
    </>
  );
}
