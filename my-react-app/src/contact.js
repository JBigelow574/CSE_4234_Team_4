import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";

function ContactUs() {
  return (
    <div>
      <Nav/>
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">Login Name goes here</p>
      </header>
      <main></main>
      <footer>&copy;Revent</footer>
      <script src="script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  );
}

export default ContactUs;
