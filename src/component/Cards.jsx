import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <Card className="cards" style={{ backgroundColor: "#dbefff" }}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text className="description">{props.description}</Card.Text>
            <NavLink to="">
              <Button variant="secondary">Visit</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
