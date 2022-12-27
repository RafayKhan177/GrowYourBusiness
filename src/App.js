//Style
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//Depenedencies
import { Route, Routes } from "react-router";
//Component
import Home from "./component/Home";
import Error from "./component/Error";
import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Service from "./component/Service";
import Contact from "./component/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exect path="PortfolioReact/" element={<Home />} />
        <Route exect path="PortfolioReact/service" element={<Service />} />
        <Route exect path="PortfolioReact/contact" element={<Contact />} />
        <Route exect path="PortfolioReact/about" element={<About />} />
        <Route path="" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
