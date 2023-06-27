import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";

function ProductCategories() {
  return (
    <div>
      <Nav/>
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">Login Name goes here</p>
      </header>
      <main>
        <h2>Product Categories</h2>
        <div className="product-grid">
          <div className="room-info">
            <img src="images/ballroom.jpg" alt="" />
            <label className="text-uppercase">Ballroom</label>
            <p>
              Indulge in the allure of our breathtaking ballroom, available for
              rent for your special day. With its grandeur and sophistication,
              our ballroom sets the stage for unforgettable events. The spacious
              layout, adorned with tasteful decor and enchanting lighting,
              creates an ambiance of elegance and charm. From glamorous balls to
              enchanting receptions, our ballroom provides the perfect backdrop
              for your dream event. Immerse yourself in luxury and create
              timeless memories in our exquisite ballroom.
            </p>
            <p className="val">$2,500 per event</p>
            <button
              onClick={() => {
                window.location.href = "/detail";
              }}
              className="button"
            >
              Reserve/Availability
            </button>
          </div>
          <div className="room-info">
            <img src="images/luxuryroom.jpg" alt="" />
            <label className="text-uppercase">Luxury Ballroom</label>
            <p>
              Step into a world of unparalleled luxury with our exquisite luxury
              room, available for your exclusive use. Every detail of this
              meticulously designed space exudes elegance and sophistication.
              From the plush furnishings to the carefully selected decor, our
              luxury room offers a captivating ambiance that promises to elevate
              your event to new heights. Whether it's a lavish celebration or an
              intimate gathering, our luxury room provides a haven of indulgence
              and refinement. Experience opulence at its finest and create
              unforgettable moments in our extraordinary luxury room.
            </p>
            <p className="val">$3,000 per event</p>
            <button
              onClick={() => {
                window.location.href = "/luxuryroom";
              }}
              className="button"
            >
              Reserve/Availability
            </button>
          </div>
          <div className="room-info">
            <img src="images/grand room.jpg" alt="" />
            <label className="text-uppercase">Grand Ballroom</label>
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
            <p className="val">$4,500 per event</p>
            <button
              onClick={() => {
                window.location.href = "/grandRoom";
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

export default ProductCategories;
