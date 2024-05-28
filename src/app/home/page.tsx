import React from "react";
import HomeCover from "../../components/HomeCover";
import HomeCard from "../../components/HomeCard";

const HomePage = () => {
  return (
    <div>
      <HomeCover />
      <div className="container-home">
        <div className="container-news">
          <div className="title-container-news">
            <h1>Noticias</h1>
            <p>Noticias destacadas de la semana</p>
          </div>
          <div className="card-news-content">
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
          </div>
        </div>

        <div className="container-news">
          <div className="title-container-news">
            <h1>Noticias</h1>
            <p>Noticias destacadas de la semana</p>
          </div>
          <div className="card-news-content">
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
          </div>
        </div>
        <div className="container-news">
          <div className="title-container-news">
            <h1>Noticias</h1>
            <p>Noticias destacadas de la semana</p>
          </div>
          <div className="card-news-content">
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
            <div className="home-card">
              <HomeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
