import React from "react";
import { Link } from "react-router-dom";

export default function Codingcom(props) {
  return (
    <>
      <div className="container" style={{ display: "flex" }}>
        <div className="container">
          <div
            class="card my-3 mx-3"
            style={{
              width: "30rem",
              border: "2px solid black",
              height: "500px",
              backgroundColor: " #8d8c88",
            }}
          >
            <img
              className=""
              style={{ height: "300px" }}
              src="data:image/png;base64,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"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"> {props.title1}</h5>
              <p class="card-text">{props.des1}.</p>
              <p class="card-text">{props.de1}</p>
              <p class="card-text">{props.d1}</p>
              <Link
                to="//www.hackerrank.com/shivanshshukla03?hr_r=1"
                class="btn btn-danger"
              >
                HackerRank
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            class="card my-3 mx-3"
            style={{
              width: "30rem",
              border: "2px solid black",
              height: "500px",
              backgroundColor: " #8d8c88",
            }}
          >
            <img
              className=" "
              style={{ height: "300px" }}
              src="data:image/jpeg;base64,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"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"> {props.title2}</h5>
              <p class="card-text">{props.des2}</p>
              <p class="card-text">{props.de2}</p>
              <p class="card-text">{props.d2}</p>
              <Link
                to="//www.codechef.com/users/shivansh_02"
                class="btn btn-danger"
              >
                CodeChef
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
