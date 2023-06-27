import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";

function LuxuryBallroom() {
  return (
    <div>
      <Nav/>
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">Login Name goes here</p>
      </header>
      <main>
        <h2>Luxury Ballroom</h2>
        <div className="product-grid">
          <div className="room-info">
            <img src="images/grand room.jpg" alt="" />
            <label className="text-uppercase">Luxury Ballroom</label>
            <p>
              Enter a realm of grandeur and magnificence with our awe-inspiring
              grand ballroom, the epitome of luxury. With its expansive space
              and regal design, our grand ballroom sets the stage for
              extraordinary events. Immerse yourself in a world of elegance as
              you marvel at the stunning architecture and exquisite detailing.
              The grand ballroom's majestic atmosphere, complemented by
              enchanting lighting and lavish decor, creates an unforgettable
              setting for the most grandiose occasions. Whether it's a
              prestigious gala or a lavish celebration, our grand ballroom
              offers an unrivaled experience. Embark on a journey of opulence
              and create timeless memories in our magnificent grand ballroom.
            </p>
            <p>Dimensions show a 96' by 256' room totaling 24,476 sq ft</p>
            <p className="val">$3,000 per event</p>
            <button
              onClick={() => {
                window.location.href = "/createNew";
              }}
              className="button"
            >
              Reserve/Availability
            </button>
          </div>
        </div>
      </main>
      <footer>&copy;Revent</footer>
      <script src="script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  );
}

export default LuxuryBallroom;
