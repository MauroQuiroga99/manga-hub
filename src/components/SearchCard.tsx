import React from "react";

const SearchCard = () => {
  return (
    <div className="search-card-aside">
      <img src="/img/maxresdefault.jpg" alt="" />
      <h2>Descripción de la busqueda</h2>
      <a href="#">
        {" "}
        <button className="button-search"> Busqueda </button>
      </a>
    </div>
  );
};

export default SearchCard;
