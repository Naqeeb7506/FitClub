import React from "react";
import "./Reason.css";

const Reason = () => {
  return (
    <div className="reason" id="reason">
      <div className="container">
        <div className="left-sec">
          <div className="grid-container">
            <div className="left">
              <img src="/image/image1.png" alt="Left Image" />
            </div>
            <div className="right">
              <div className="top-right">
                <img src="/image/image2.png" alt="Top Right" />
              </div>
              <div className="bottom-right">
                <div className="bottom-left">
                  <img src="/image/image3.png" alt="Bottom Left" />
                </div>
                <div className="bottom-right-img">
                  <img src="/image/image4.png" alt="Bottom Right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sec">
          <h3>Some Reasons</h3>
          <h2>
            <span className="stroke-text">Why</span> Choose Us?
          </h2>
          <ul>
            <li>
              <img src="/image/tick.png" alt="tick" />
              over 140+ expert coachs
            </li>
            <li>
              <img src="/image/tick.png" alt="tick" />
              train smarter and faster than before
            </li>
            <li>
              <img src="/image/tick.png" alt="tick" />1 free program for new
              member
            </li>
            <li>
              <img src="/image/tick.png" alt="tick" />
              reliable partners
            </li>
          </ul>
          <div className="partners">
            <p>Our Partners</p>
            <div className="partner-logos d-flex gap-4 pt-3">
              <img src="/image/nb.png" alt="Partner 1" />
              <img src="/image/adidas.png" alt="Partner 2" />
              <img src="/image/nike.png" alt="Partner 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
