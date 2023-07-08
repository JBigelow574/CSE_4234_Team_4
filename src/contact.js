import React, { useContext } from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";
import AutoContext from './context';


function ContactUs({ email }) {
  const value = useContext(AutoContext);

  if (email.length>1){
  return (
    <div>
      <Nav />
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">{email}</p>
      </header>
      <main>
      <h1>Contact Us</h1>
        <form>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label for="email">Enter your email:</label><br/>
                <input type="email" id="email" name="email"/><br/>
                <label for="w3review">Your Message</label><br/>
                <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea><br/>
                <input type="checkbox" id="reply" name="reply" value="reply"/>
                <label for="reply"> Send a reply to my email</label><br/>
                <input type="submit" value="Submit"/>
            </form>
            </main>
      <footer>&copy;Revent</footer>
      <script src="script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  );
}
else{
  return(
    <div>
      <Nav />
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">{email}</p>
      </header>
      <main>
      <p>Log in to see more.</p>
            </main>
      <footer>&copy;Revent</footer>
      <script src="script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  )
}}

export default ContactUs;
