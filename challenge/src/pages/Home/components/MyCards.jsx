import "../Home.css";
import { Card, Col, ProgressBar, Row, Button } from "react-bootstrap";

const MyCards = (hero) => {
  return (
    <Card className="card__container">
      <Card.Img
        className="myImg"
        variant="top"
        src={hero.image.url}
        height="200"
      />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        <div>
          <Row>
            <Col style={{paddingRight: "0"}}>
              <div>Combat: </div>
              <div>Durability: </div>
              <div>Intelligence: </div>
              <div>Power: </div>
              <div>Speed: </div>
              <div>Strenght: </div>
            </Col>
            <Col style={{padding: "3px"}}>
              <ProgressBar variant="warning" className="myProgressBar" now={hero.powerstats.combat} label={hero.powerstats.combat} />
              <ProgressBar variant="success" className="myProgressBar" now={hero.powerstats.durability} label={hero.powerstats.durability} />
              <ProgressBar variant="primary" className="myProgressBar" now={hero.powerstats.intelligence} label={hero.powerstats.intelligence} />
              <ProgressBar variant="danger" className="myProgressBar" now={hero.powerstats.power} label={hero.powerstats.power} />
              <ProgressBar variant="secondary" className="myProgressBar" now={hero.powerstats.speed} label={hero.powerstats.speed} />
              <ProgressBar variant="info" className="myProgressBar" now={hero.powerstats.strength} label={hero.powerstats.strength} />
            </Col>
          </Row>
        </div>
        <div className="buttons__container">
            <Button className="myButtons" variant="outline-warning" size="sm">Detalles</Button> {' '}
            <Button className="myButtons" variant="danger" size="sm">Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCards;
