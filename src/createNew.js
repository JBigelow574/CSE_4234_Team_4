import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";
import { useContext } from 'react';
import AutoContext from './context';


function ReservationForm() {

  const value = useContext(AutoContext)

  return (
    <div>
      <Nav/>
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">{value}</p>
      </header>
      <article>
        <section>
          <h1>Reserve a Room</h1>
          <form action="/">
            <label>First Name: </label>
            <input type="text" />
            <br />
            <label>Last Name: </label>
            <input type="text" />
            <br />
            <label>Enter your email: </label>
            <input type="email" />
            <br />
            <label htmlFor="room-type">Select a room:</label>
            <select id="room-type" name="room-type">
              <option value="grandroom">Grandroom</option>
              <option value="luxuryroom">Luxuryroom</option>
              <option value="ballroom">Ballroom</option>
            </select>
            <br />
            <label>I am not a robot</label>
            <input type="checkbox" />
            <br />
            <label>Submit: </label>
            <input type="submit" />
          </form>
        </section>
      </article>
      <main></main>
      <footer>&copy;Revent</footer>
      <script src="script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </div>
  );
}

export default ReservationForm;
