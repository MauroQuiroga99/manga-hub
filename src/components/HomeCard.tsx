import React from "react";

const HomeCard = () => {
  return (
    <div>
      <div className="card-home-content">
        <div className="card-home-item">
          <div className="card-home-img">
            <img src="/img/imagem_2023-11-08_124714483.png" alt="" />
          </div>
          <div className="card-home-info">
            <h2>Título del art</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              laudantium quia fugiat aut sequi cum a, accusamus reprehenderit
              sit odit.
            </p>
            <a href="#">
              {" "}
              <button className="button-aside"> Ver + </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
