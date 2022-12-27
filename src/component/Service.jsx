import Cards from "./Cards";
import ServicesData from "./ServicesData";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {ServicesData.map((val, index) => {
                  return <Cards imgSrc={val.img} title={val.title} description={val.description} key={index}/>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
