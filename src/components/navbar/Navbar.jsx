import React, { useEffect, useState, useRef } from "react";
import "./Navbar.scss";
import "../../App.scss";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const mouse = useRef(null);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 100 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    document.addEventListener("mousedown", clickOutside);

    return () => {
      window.removeEventListener("scroll", isActive);
      document.addEventListener("mousedown", clickOutside);
    };
  });

  const clickOutside = (event) => {
    if (mouse.current && !mouse.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const currentUser = {
    id: 1,
    username: "Walid Ka",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">
            &#9776;
          </label>
          <Link to="/" className="link">
            <h1>
              fiverr<span className="dot">.</span>
            </h1>
          </Link>
        </div>

        <div className="links">
          <ul>
            <Link to="/" className="link">
              Fiverr Business
            </Link>
            <Link to="/" className="link">
              Explore
            </Link>
            <Link to="/" className="link">
              English
            </Link>
            {!currentUser?.isSeller && (
              <Link to="/" className="link">
                Become a Seller
              </Link>
            )}

            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)} ref={mouse}>
                <img src="/src/img/walid.jpg" alt="" />
                <span>{currentUser?.username}</span>

                {open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link className="link" to="myGigs">
                          Gigs
                        </Link>
                        <Link className="link" to="add">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="orders">
                      Orders
                    </Link>
                    <Link className="link" to="messages">
                      Messages
                    </Link>
                    <Link to="/" className="link">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />

          <div className="menu">
            <Link to="/" className="link menuLink">
              Graphics & Design
            </Link>
            <Link to="/" className="link">
              Video & Animation
            </Link>
            <Link to="/" className="link">
              Writing & Translation
            </Link>
            <Link to="/" className="link">
              Ai Services
            </Link>
            <Link to="/" className="link">
              Digital Marketing
            </Link>
            <Link to="/" className="link">
              Music & Audio
            </Link>
            <Link to="/" className="link">
              Programming & Tech
            </Link>
            <Link to="/" className="link">
              Business
            </Link>
            <Link to="/" className="link">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
