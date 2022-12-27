import img from "./images/img1.jpg";
import Common from "./Common";

export default function About() {
  return (
    <>
      <Common
        page="About Me Hello. my name is"
        about="Hello everyone! My name is Rafay and I am a front-end web developer. I specialize in creating clean code and pixel perfect designs. My goal is to always make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device. This is important because it ensures that everyone can access your site no matter what type of device they are using.
        As a web developer, I am always looking for ways to make my websites more interactive and engaging for users. One way I do this is by using web animations. Web animations can be used to add visual interest to a website and make it more responsive to user interactions. By animating elements on the page, we can create a more fluid and dynamic experience that feels alive and reacting to the user’s input. This not only makes for a more enjoyable experience for your users, but can also help with conversions and other key metric"
        imgSrc={img}
        visit="/contact"
        btName="CONTACT NOW"
      />
    </>
  );
}
