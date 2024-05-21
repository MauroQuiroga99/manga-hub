import React from "react";

const HomeCard = () => {
  return (
    <div>
      <div className="card-home-content">
        <div className="card-home-item">
          <div className="card-home-img">
            <img src="/img/FejzTOYWQAAnpn_.jpg" alt="" />
          </div>
          <div className="card-home-info">
            <h2>Título del art</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              laudantium quia fugiat aut sequi cum a, accusamus reprehenderit
              sit odit.
            </p>
            <a className="btn-home-card" href="#">
              {" "}
              <button className="button-home"> Ver + </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
