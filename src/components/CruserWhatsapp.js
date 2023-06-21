import React from "react";
import Navbar from "./Navbar";

export default function CruserWhatsapp(props) {
  return (
    <>
      <Navbar />
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div class="carousel-item active ">
            <img src="https://source.unsplash.com/1600x500/?whatsApp" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                className=""
                style={{ backgroundColor: "rgba(0, 0, 0, 0.477)" }}
              >
                WhatsApp Remainder App
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p>
        <h3>INTRODUCTION</h3>
        Its a remainer app that sends you a notification on whatsapp at the time
        you want it to, its a type of alarm clock but the difference is that
        will message you on WhatsApp
        <h4>Technology Used</h4>
        <p>
          Html, css, bootstrap, javascript, jqueryexpress, mongodb, mongoose
          connecter, requests, postman
        </p>
        <h3>My Contribution</h3>
        <p>I am the self developer of the WebApp </p>
      </p>
    </>
  );
}
