import React from 'react';
import IMGBackground from './assets/images/drapeau.png';
import NavBar from './navbar';
import ItemList1 from './cardtest';
import YT from './yt.js';
// import App from './db.js';
// import DBFROM from './dbfromage.js';
import ButtonDB from './fromagelistdb.js';



const Background = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${IMGBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    // opacity: 0.9
  };

  return (
    <div style={backgroundImageStyle}>
      <NavBar />
      <ItemList1 />
      <YT />
      {/* <App/> */}
      {/* <DBFROM/> */}
      <ButtonDB />
    </div>
  );
};



export default Background;
