import Common from "./Common";
import img from "./images/img1.jpg";

export default function Home() {
  return (
    <>
      <Common
        page="Grow your Buisness"
        about="High level experince in web desgin and development knowledge, producing quality work"
        imgSrc={img}
        visit="/service"
        btName="Get Started"
      />
    </>
  );
}
