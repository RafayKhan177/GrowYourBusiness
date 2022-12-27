//Style
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//Depenedencies
import { Route, Routes } from "react-router";
//Component
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Header";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/service" element={<Service />} />
        <Route exect path="/contact" element={<Contact />} />
        <Route exect path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
