import { Card, Col, Row, Button, Image } from "react-bootstrap";
import "./SearchResults.css";

const Searchresult = ({ results }) => {
  return (
    <div className="search__container">
      <Card className="search-card__container">
        <Row>
          <Col>
            <Row>
              <Image src={results.image.url} thumbnail width="150px" />
            </Row>
          </Col>
          <Col>
            <Row>
              <Card.Title>{results.biography["full-name"]}</Card.Title>
            </Row>
            <Card.Text>{results.name}</Card.Text>
            <Row style={{marginTop: "5rem"}}>
              <Button variant="primary">Go somewhere</Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Searchresult;
