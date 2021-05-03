import "../Home.css";
import { Card, Col, ProgressBar, Row, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const MyCard = (hero) => {

  let combat = hero.powerstats.combat;
  let durability = hero.powerstats.durability;
  let intelligence = hero.powerstats.intelligence;
  let power = hero.powerstats.power;
  let speed = hero.powerstats.speed;
  let strength = hero.powerstats.strength;

  return (
    <Card className="card__container">
      <Card.Img
        className="myImg"
        variant="top"
        src={hero.image.url}
        height="300"
      />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        <div>
          <Row>
            <Col style={{paddingRight: "0"}}>
              <div>Combate: </div>
              <div>Durabilidad: </div>
              <div>Inteligencia: </div>
              <div>Energía: </div>
              <div>Velocidad: </div>
              <div>Fuerza: </div>
            </Col>
            <Col style={{padding: "3px"}}>
              <ProgressBar 
                variant="warning"
                className="myProgressBar"
                now={combat}
                label={`${combat} %`}/>
              <ProgressBar 
                variant="success"
                className="myProgressBar"
                now={durability}
                label={`${durability}%`} />
              <ProgressBar 
                variant="primary"
                className="myProgressBar"
                now={intelligence}
                label={`${intelligence}%`} />
              <ProgressBar 
                variant="danger"
                className="myProgressBar"
                now={power}
                label={`${power}%`} />
              <ProgressBar 
                variant="secondary"
                className="myProgressBar"
                now={speed}
                label={`${speed}%`} />
              <ProgressBar 
                variant="info"
                className="myProgressBar"
                now={strength}
                label={`${strength}%`} />
            </Col>
          </Row>
        </div>
        <div className="buttons__container">
            <Button 
              className="myButtons"
              variant="outline-warning"
              size="sm">
                <Link to={`/heroes/${hero.id}`}>
                  Detalles
                </Link>
            </Button> {' '}
            <Button 
              className="myButtons"
              variant="danger"
              size="sm">
                Eliminar
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
