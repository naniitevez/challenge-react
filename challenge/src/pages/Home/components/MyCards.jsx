import "../Home.css";
import { Card, Col, ProgressBar, Row, Button } from "react-bootstrap";

const MyCards = () => {
  return (
    <Card className="card__container">
      <Card.Img
        className="myImg"
        variant="top"
        src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        height="160"
      />
      <Card.Body>
        <Card.Title>"algo{}</Card.Title>
        <div>
          <Row>
            <Col style={{paddingLeft: "7px" , paddingRight: "0"}}>
              <div>Combat: </div>
              <div>Dutability: </div>
              <div>Intelligence: </div>
              <div>Power: </div>
              <div>Speed: </div>
              <div>Strenght: </div>
            </Col>
            <Col style={{padding: "3px"}}>
              <ProgressBar variant="warning" className="myProgressBar" now="40" label="30%" />
              <ProgressBar variant="success" className="myProgressBar" now="40" label="30%" />
              <ProgressBar variant="primary" className="myProgressBar" now="40" label="30%" />
              <ProgressBar variant="danger" className="myProgressBar" now="40" label="30%" />
              <ProgressBar variant="secondary" className="myProgressBar" now="40" label="30%" />
              <ProgressBar variant="info" className="myProgressBar" now="40" label="30%" />
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
