import Card from "react-bootstrap/Card";
import Tags from "../Tags/Tags";
import "./MyCard.css";

const MyCard = ({ image, name, description, bgColor, raza }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Tags bgColor={bgColor} raza={raza} />
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
