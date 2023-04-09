import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i className="freelance">freelance</i> services for
            your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/public/img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>

            <button>Search</button>
          </div>

          <div className="popular">
            <span>Popular:</span>

            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="/public/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
