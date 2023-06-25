import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";

function Home(){

    return(
        <div>
           
          <header>
            <img src={appLogo} className="bannerImg" alt="Revent Logo"/>
              <p className="loginName">Login Name goes here</p>
            </header>
        <Nav/>
        <main>
          <p>Where Unforgettable Events Begin. Simplify your event planning process with Revent, the premier platform for reserving rooms for birthdays, parties, dances, balls, and more. Discover a curated selection of venues tailored to your needs, browse photos and reviews, and make informed decisions. Our user-friendly interface and dedicated support team ensure a seamless experience from start to finish. Let Revent be your trusted partner in creating extraordinary memories.</p>
        </main>
        <footer>&copy;Revent</footer>
        <script src="script.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        </div>
    );
}

export default Home;