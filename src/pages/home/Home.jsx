import React from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slides/Slide";
import Card from "../../components/CatCard/Card";
import { cards } from "../../data";
import { projects } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <Card item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item-left">
            <h1>A whole world of freelance talent at your fingertips</h1>

            <div className="title">
              <img src="/public/img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="/public/img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="/public/img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="/public/img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item-right">
            <video
              src="/public/img/video.mp4"
              controls
              poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            ></video>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="container">
          <h2>Explore the marketplace</h2>
          <div className="content">
            <div className="top">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                  alt=""
                />
                <p>Graphics & Design</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                  alt=""
                />
                <p>Digital Marketing</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                  alt=""
                />
                <p>Writing & Translation</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                  alt=""
                />
                <p>Video & Animation</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
                  alt=""
                />
                <p>Music & Audio</p>
              </div>
            </div>
            <div className="bottom">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                  alt=""
                />
                <p>Programming & Tech</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
                  alt=""
                />
                <p>Business</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                  alt=""
                />
                <p>Lifestyle</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                  alt=""
                />
                <p>Data</p>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                  alt=""
                />
                <p>Photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features bg-dark">
        <div className="container">
          <div className="item-left">
            <h2>Fiverr business</h2>
            <h1>
              A business solution designed for <i className="teams">teams</i>
            </h1>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>

            <div className="title">
              <img src="/public/img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="/public/img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="/public/img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>

            <button>Explore Fiverr Business</button>
          </div>
          <div className="item-right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="get-started">
        <div className="container">
          
            <div className="left">
              <h1>
                Find the <i>talent</i> needed to get your business{" "}
                <i>growing</i>.
              </h1>
              <button>Get Started</button>
            </div>
            <div className="right"></div>
          
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
