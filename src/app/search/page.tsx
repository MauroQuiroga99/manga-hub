import React from "react";
import SearchCard from "../../components/SearchCard";

const SearchPage = () => {
  return (
    <div className="search">
      <div className="search-container">
        <div className="title-search">
          {" "}
          <h1>Resultado de la busqueda"XXXXXXXX"</h1>
        </div>
        <div className="search-content">
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
