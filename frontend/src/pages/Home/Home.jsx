import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import Play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TittleCards from "../../components/TilttleCards/TittleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={Hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order , a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immoral enenmy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>
          <TittleCards />
        </div>
      </div>
      <div className="more-cards">
        <TittleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TittleCards title={"Only on Netflix"} category={"popular"} />
        <TittleCards title={"Upcoming"} category={"upcoming"} />
        <TittleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
