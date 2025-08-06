import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Home = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="home" id="home">
      <div className="container ">
        <div className="blur hero-blur"></div>
        <div className="left-section">
          <div className="intro">
            <motion.div
              initial={{ left: "300px" }}
              whileInView={{ left: "12px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <p>The Best Fitness Club in Town</p>
          </div>
          <div className="heading">
            <h1>
              <span className="stroke-text">Shape</span> Your <br /> Ideal Body
            </h1>
          </div>
          <p className="description">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>
          <div className="num-box  ">
            <div className="first">
              <span className="numbers">
                <NumberCounter end={140} start={50} delay="4" preFix="+" />
              </span>
              <br />
              <span>EXPERT COACHES</span>
            </div>
            <div className="second">
              <span className="numbers">
                <NumberCounter end={978} start={500} delay="4" preFix="+" />
              </span>
              <br />
              <span>MEMBERS JOINED</span>
            </div>
            <div className="third">
              <span className="numbers">
                <NumberCounter end={50} start={10} delay="4" preFix="+" />
              </span>
              <br />
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          <div className="btns">
            <button className="normal-btn">
              <a href="#form">Get Started</a>
            </button>
            <button className="border-btn">
              <a href="#form">Learn More</a>
            </button>
          </div>
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src="image/hero_image.png" alt="Home" />
            <motion.div
              initial={{ left: "0px" }}
              whileInView={{ left: "-40px" }}
              transition={transition}
              className="backImg"
            >
              <img src="/image/hero_image_back.png" alt="back" />
            </motion.div>
          </div>
          <div className="health">
            <motion.div
              initial={{ right: "-15px" }}
              whileInView={{ right: "30px" }}
              transition={transition}
              className="heart-rate"
            >
              <img src="image/heart.png" alt="Heart Rate" />
              <span>Heart Rate</span>
              <span className="value">116 bpm</span>
            </motion.div>
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "-55%" }}
              transition={{ ...transition, duration: 3 }}
              className="calories"
            >
              <img src="image/calories.png" alt="Calories Burned" />
              <span>Calories Burned</span>
              <span className="value">220 kcal</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
