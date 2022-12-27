import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <Card style={{backgroundColor:"#bce1ff"}}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title className="cardTitle">{props.title}</Card.Title>
            <Card.Text className="cardDescription">
            {props.description}
            </Card.Text>
            <NavLink to="">
              <Button variant="secondary">Go somewhere</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;
