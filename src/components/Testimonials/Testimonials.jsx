import React, { useState } from "react";
import "./Testimonials.css";
import testimonialsData from "../../data/testimonialsData.jsx";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const transition = { type: "spring", duration: 2 };
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="left-sec">
          <h3>Testimonials</h3>
          <h2>
            <span className="stroke-text">What they</span>
            <br />
            Say About us
          </h2>
          <motion.p
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            className="review"
          >
            {testimonialsData[selected].review}
          </motion.p>
          <div className="bottom">
            <p className="user">
              <span>{testimonialsData[selected].name}</span> -{" "}
              {testimonialsData[selected].status}
            </p>
            <div className="arrows">
              <img
                src="/image/leftArrow.png"
                alt="left"
                onClick={() => {
                  selected === 0
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
              />
              <img
                src="/image/rightArrow.png"
                alt="right"
                onClick={() => {
                  selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        </div>
        <div className="right-sec">
          <div className="user-img">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              className="border-img"
            ></motion.div>
            <motion.img
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
              src={testimonialsData[selected].image}
              alt="User"
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              className="bottom-frame"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
