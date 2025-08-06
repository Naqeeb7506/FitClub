import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.jsx";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="container">
        <i>
          <h2 className="text-center my-4 prog-heading">
            <span className="stroke-text">Explore Our</span>
            <span>Programs</span>
            <span className="stroke-text">To Shape You</span>
          </h2>
        </i>
        <div className="card-container">
          {programsData.map((program, index) => (
            <div className="prog-card" key={index}>
              <div className="icon-img">{program.image}</div>
              <h3>{program.heading}</h3>
              <p>{program.details}</p>
              <div className="join d-flex align-items-center justify-content-between">
                <p>Join Now </p>
                <img src="/image/rightArrow.png" alt="arrow" width="20px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
