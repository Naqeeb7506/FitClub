import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="container">
        <i>
          <h2 className="prog-heading">
            <span className="stroke-text">Ready to Start</span>
            <span>Your Journey</span>
            <span className="stroke-text">now withus</span>
          </h2>
        </i>
        <div className="blur"></div>
        <div className="plans-container">
          {plansData.map((plan, index) => {
            return (
              <div className="cards" key={index}>
                <div className="img-logo">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <h2>$ {plan.price}</h2>
                <ul>
                  <li>
                    <img src="/image/whiteTick.png" alt="correct" />
                    {plan.features[0]}
                  </li>
                  <li>
                    <img src="/image/whiteTick.png" alt="correct" />
                    {plan.features[1]}
                  </li>
                  <li>
                    <img src="/image/whiteTick.png" alt="correct" />
                    {plan.features[2]}
                  </li>
                </ul>
                <p>
                  See more benefits{" "}
                  <img src="/image/rightArrow.png" alt="right" />
                </p>
                <button>
                  <a href="#form">Join now</a>
                </button>
              </div>
            );
          })}
        </div>
        <div className="blur right-blur"></div>
      </div>
    </div>
  );
};

export default Plans;
