import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg body-success bg-light mx=6">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            Shivansh Shukla
          </Link>
          <button
            className="navbar-toggler mx-10"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coding">
                  Coding & Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
