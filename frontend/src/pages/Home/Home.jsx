import React from "react";
import * as C from "./styles";
import Header from "../../components/Home/header";
import Logo from "../../images/logo.png";
import ExpandMore from "../../images/expand_more.svg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <C.Container>
      <div className="banner">
        <p>$7,500 tax credit for Model Y and Model 3. Model 3 RWD credit reducing to $3,750 on April 18. <span className="learnMore">Learn More</span></p>
      </div>


      <div className="content">

        <header className="styleHeader">
          <img className="logo" src={Logo} alt="Logo tesla" />

          <div className="optionHeader">
            <Header optionHeader="Model S"/>
            <Header optionHeader="Model 3"/>
            <Header optionHeader="Model X"/>
            <Header optionHeader="Model Y"/>
            <Header optionHeader="Solar Roof"/>
            <Header optionHeader="Solar Panels"/>
            <Header optionHeader="Powerwall"/>
          </div>

          <div className="menuFixed">
            <div className="optionHeader">
              <Header optionHeader="Shop"/>
              <Header optionHeader="Account"/>
            </div> 

            <span className="buttonMenu">Menu</span>
          </div>
        </header>

        <div className="title-subTitle">
          <p className="title"> Model Y </p>
          <span className="subTitle"> View Inventory </span>
        </div>

        <div className="buttons">
          <Link to="/publication" className="orderNow"> Order now </Link>
          <button className="demoDrive"> Demmo drive </button>
        </div>

        <img className="expandMore" src={ExpandMore} alt="Icon" />
      </div> 
    </C.Container>
  );
};

export default Home;