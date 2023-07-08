import React from "react";
import Nav from "./Nav";
import appLogo from "./logoRevent.png";
import { useContext } from 'react';
import AutoContext from './context';
import useData from './useData';
import ballRoom from './images/ballroom.jpg';
import luxuryRoom from './images/luxuryroom.jpg';
import grandRoom from './images/grand room.jpg';
import { Link } from "react-router-dom";

function ProductCategories() {
  const array = [appLogo,ballRoom,luxuryRoom,grandRoom]
  const url_format = ["",""]
  const value = useContext(AutoContext);
  const [data] = useData(); // Use the custom hook to fetch and retrieve the data
  console.log(data);
  if (value.length>1){
  return (
    <div>
      <Nav/>
      <header>
      <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">{value}</p>
      </header>
      <main>
        <h2>Product Categories</h2>
        <div className="product-grid">
          <button><Link to="/detail">Ballroom Link</Link></button>
          <button><Link to="/luxuryRoom">Luxury Room Link</Link></button>
          <button><Link to="/grandRoom">Grand Room Link</Link></button>
          <div className="room-info">
            {data.map((item) => (
              <div key={item.id}>
                <img src={ array[item.id] } />
                <h2>{item.name}</h2>
                {item.id === item.id && <p>{item.desc}</p>}              
              </div>
            ))}            
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
else{
  return(
    <div>
      <Nav />
      <header>
        <img src={appLogo} className="bannerImg" alt="Revent Logo" />
        <p className="loginName">{value}</p>
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

export default ProductCategories;
