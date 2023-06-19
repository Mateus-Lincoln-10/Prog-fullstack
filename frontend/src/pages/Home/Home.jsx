import React from "react";
import * as C from "./styles";
import Header from "../../components/Home/header";
import Background from "../../images/background.png";
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

      <img className="bg" src={Background} alt="Logo tesla" />
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
          <Link to="/publication" className="orderNow"> Publicar veículo </Link>
          <Link to="/search-vehicle" className="demoDrive"> Pesquisar veículos </Link>
          <button className="generate_report"> Gerar relatório </button>
          <Link to="/generate-report" className="see_reports"> Ver relatórios </Link>
        </div>

        <img className="expandMore" src={ExpandMore} alt="Icon" />
      </div> 
    </C.Container>
  );
};

export default Home;

