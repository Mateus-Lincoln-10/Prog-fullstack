import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Header from "../../components/Home/header";
import Logo from "../../images/logo.png";
import ExpandMore from "../../images/expand_more.svg";
import Bg from "../../images/background.png";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const Publication = () => {
    navigate("/publication");
  };

  return (
    <C.Container>
    

      <div className="banner">
        <p>$7,500 tax credit for Model Y and Model 3. Model 3 RWD credit reducing to $3,750 on April 18. <a className="learnMore" href="">Learn More</a></p>
      </div>


      <div className="content">
        
        
        <img className="bg" src={Bg} alt="Logo tesla" />
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
        
            <a className="buttonMenu">Menu</a>
          </div>
        </header>

        <div className="title-subTitle">
          <p className="title"> Model Y </p>
          <a className="subTitle" href=""> View Inventory </a>
        </div>

        <div className="buttons">
          <Link  className="orderNow" to="/publication">&nbsp;Publicar veículo</Link>
          <button className="demoDrive"> Demmo drive </button>
        </div>
        

        <img className="expandMore" src={ExpandMore} alt="Icon" />
      </div> 
    </C.Container>
  );
};

export default Home;


//<C.Title>Home</C.Title>
//<Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
//  Sair
// </Button>