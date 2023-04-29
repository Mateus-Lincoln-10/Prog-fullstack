import styled from "styled-components";

export const Container = styled.div`
  @font-face {
  font-family: Gotham SSm;
  font-weight: 700;
  font-display: swap;
  font-style: normal;
  src: url(https://cdn-design.tesla.com/tds-fonts/x/woff2/GothamSSm-Bold_Web.woff2) format("woff2")
}

@font-face {
  font-family: Gotham SSm;
  font-weight: 500;
  font-display: swap;
  font-style: normal;
  src: url(https://cdn-design.tesla.com/tds-fonts/x/woff2/GothamSSm-Medium_Web.woff2) format("woff2")
}

@font-face {
  font-family: Gotham SSm;
  font-weight: 400;
  font-display: swap;
  font-style: normal;
  src: url(https://cdn-design.tesla.com/tds-fonts/x/woff2/GothamSSm-Book_Web.woff2) format("woff2")
}

@font-face {
  font-family: Gotham SSm;
  font-weight: 300;
  font-display: swap;
  font-style: normal;
  src: url(https://cdn-design.tesla.com/tds-fonts/x/woff2/GothamSSm-Light_Web.woff2) format("woff2")
}

@font-face {
  font-family: Gotham SSm;
  font-weight: 200;
  font-display: swap;
  font-style: normal;
  src: url(https://cdn-design.tesla.com/tds-fonts/x/woff2/GothamSSm-XLight_Web.woff2) format("woff2")
}

*{
  overflow-x: hidden;
  margin: 0;
}

.banner {
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 1px #d0d1d2;
  font-family: Gotham SSm;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #393c41;
}

.learnMore {
  color: #393c41;
}

.content {
  background-image: url(../../images/background.png);
  background-size: cover;
  height: 92vh;
  background-repeat: no-repeat;
}

.logo {
  width: 80px;
  height: 1rem;
  margin-right: 5rem;
}
.bg {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 92vh;
}

.styleHeader {
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  width: 100%;
  font-family: Gotham SSm;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #171a20;
}

.optionHeader {
  display: flex;
  gap: 1.2rem;
  text-decoration: none;
}

.menuFixed {
  display: flex;
  gap: 1rem;
}

.title {
  display: flex; 
  justify-content: center;
  margin-top: 5rem;
  font-family: Gotham SSm;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #171a20;
}

.subTitle {
  display: flex; 
  justify-content: center;
  font-family: Gotham SSm;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #171a20;
}

.buttons {
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.orderNow {
  border: none;
  border-radius: 4px;
  width: 18%;
  height: 40px;
  padding-top: 0.6rem;
  padding-left: 4rem;
  text-decoration: none;
  color: #fff;
  background-color: rgba(23, 26, 32, 0.8);
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.demoDrive {
  border: none;
  border-radius: 4px;
  width: 18%;
  height: 40px;
  padding-top: 0.6rem;
  padding-left: 4rem;
  text-decoration: none;
  color: #393c41;
  background-color: rgba(244, 244, 244, 0.65);
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.expandMore {
  margin-left: 49vw;
  margin-top: 2rem;
  width: 32px;
  height: 32px;
}

`;
