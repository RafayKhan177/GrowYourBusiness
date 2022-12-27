import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((allVal) => {
      return { ...allVal, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullName} My Phone Number is ${data.phone} My Email is ${data.email} I Want to say: ${data.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contactDiv">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-5">
            <Form onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="(Mike, Rafay etc)"
                />
                <Form.Text className="text-muted">
                  Anyone can see your name.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className="input"
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="like 042 (123) 456 789"
                />
                <Form.Text className="text-muted">
                  We'll never share your mobile number with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="demo@gmail.com"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="your message here"
                />
                <Form.Text className="text-muted">
                  Feel Free to Write, We'll never share your message with anyone
                  else.
                </Form.Text>
              </Form.Group>
              <Button className="px-5" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
