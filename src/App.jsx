import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Reason from "./components/Reason/Reason.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
