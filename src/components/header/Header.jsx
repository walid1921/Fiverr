import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

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
            <Link to='/gigs'>
              <button>Web Design</button>
            </Link>

            <Link to='/gigs'>
              <button>Wordpress</button>
            </Link>

            <Link to='/gigs'>
              <button>Logo Design</button>
            </Link>

            <Link to='/gigs'>
              <button>AI Services</button>
            </Link>
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
