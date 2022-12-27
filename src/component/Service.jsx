import Cards from "./Cards";
import ServicesData from "./ServicesData";

export default function Service() {
  return (
    <>
      <div>
        <h1 className="text-center my-5">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {ServicesData.map((val, index) => {
                  return (
                    <Cards
                      imgSrc={val.img}
                      title={val.title}
                      description={val.description}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
