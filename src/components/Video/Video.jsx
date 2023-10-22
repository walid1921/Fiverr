import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="left">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="content">
            <div className="content_title">
              <div className="title">
                <img src="/src/img/check.png" alt="" />
                <h3>The best for every budget</h3>
              </div>

              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="content_title">
              <div className="title">
                <img src="/src/img/check.png" alt="" />
                <h3 className="title">Quality work done quickly</h3>
              </div>

              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>
            <div className="content_title">
              <div className="title">
                <img src="/src/img/check.png" alt="" />
                <h3 className="title">Protected payments, every time</h3>
              </div>

              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>
            <div className="content_title">
              <div className="title">
                <img src="/src/img/check.png" alt="" />
                <h3 className="title">24/7 support</h3>
              </div>

              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <video
            src="/src/img/video.mp4"
            controls
            poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
