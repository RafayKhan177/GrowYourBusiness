import { NavLink } from "react-router-dom";
import img from "./images/img1.jpg";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.page}
                    <strong className="brandName"> Rafay Khan </strong>
                  </h1>
                  <h2 className="my3 about">
                    {props.about}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                     {props.btName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 headerImg">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="About img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
