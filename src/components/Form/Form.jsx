import React, { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_fjm6rq7", "template_sv3pytv", form.current, {
      publicKey: "Wfebi1blU1Pt5J7RI",
    })
    .then(
      () => {
        toast.success("Email sent successfully!");
        form.current.reset(); // Optional: reset form
      },
      (error) => {
        toast.error("Failed to send email. Please try again.");
        console.log("FAILED...", error.text);
      }
    );
};
  return (
    <div className="form" id="form">
      <div className="container">
        <div className="form-content">
          <h2>
            <span className="stroke-text top-border pt-3">ready to</span> level
            up <br />
            your body{" "}
            <span className="stroke-text bottom-border pb-3">with us?</span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_email"
              id="user_email"
              placeholder="Enter Your Email Id"
            />
            <button>Join now</button>
          </form>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default Form;
