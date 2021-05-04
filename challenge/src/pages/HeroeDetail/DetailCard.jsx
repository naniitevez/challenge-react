import "./DetailCard.css";
import { Container, Image, Col, ProgressBar, Row } from "react-bootstrap";

const DetailCard = (myHero) => {
  let combat = myHero.powerstats.combat;
  let durability = myHero.powerstats.durability;
  let intelligence = myHero.powerstats.intelligence;
  let power = myHero.powerstats.power;
  let speed = myHero.powerstats.speed;
  let strength = myHero.powerstats.strength;

  return (
    <Container fluid>
        <Container className="detail__container">
          <Row>
            <Col>
              <Row>
                <Image src={myHero.image.url} thumbnail />
              </Row>
              <Row>
                <h2><em>{myHero.name}</em></h2>
              </Row>
            </Col>
            <Col className="info__container">
              <div className="info-flex">
                <h5>{myHero.biography["full-name"]}</h5>
              </div>
              <div className="info-flex">
                <h5>Alias: </h5>
                {
                  myHero.biography.aliases.join(' - ')
                }
              </div>
              <div className="info-flex">
                <h5>Alter-egos: </h5>
                {myHero.biography["alter-egos"]}
              </div>
              <div className="info-flex">
                <h5>Género: </h5>
                {myHero.appearance.gender}
              </div>
              <div className="info-flex">
                <h5>Peso: </h5>
                {myHero.appearance.weight[1]}
              </div>
              <div className="info-flex">
                <h5>Altura: </h5>
                {myHero.appearance.height[1]}
              </div>
              <div className="info-flex">
                <h5>Color de ojos: </h5>
                {myHero.appearance["eye-color"]}
              </div>
              <div className="info-flex">
                <h5>Color de cabello: </h5>
                {myHero.appearance["hair-color"]}
              </div>
              <div className="info-flex">
                <h5>Inclinación: </h5>
                {myHero.biography.alignment}
              </div>
            </Col>
            <Col>
              <Col>
              <h2><u>Estadísticas</u></h2>
                <div>
                  <h5>Combate: </h5>
                  <ProgressBar
                    variant="warning"
                    now={combat}
                    label={`${combat} %`}
                  />
                </div>
                <div>
                  <h5>Durabilidad: </h5>
                  <ProgressBar
                    variant="success"
                    now={durability}
                    label={`${durability} %`}
                  />
                </div>
                <div>
                  <h5>Inteligencia: </h5>
                  <ProgressBar
                    variant="primary"
                    now={intelligence}
                    label={`${intelligence} %`}
                  />
                </div>
                <div>
                  <h5>Energía: </h5>
                  <ProgressBar variant="danger" now={power} label={`${power} %`} />
                </div>
                <div>
                  <h5>Velocidad: </h5>
                  <ProgressBar
                    variant="secondary"
                    now={speed}
                    label={`${speed} %`}
                  />
                </div>
                <div>
                  <h5>Fuerza: </h5>
                  <ProgressBar
                    variant="info"
                    now={strength}
                    label={`${strength} %`}
                  />
                </div>
              </Col>
              <Col>
                <h5 style={{marginTop: "3rem"}}>Publisher: {myHero.biography.publisher}</h5>
              </Col>
            </Col>
          </Row>
        </Container>
    </Container>
  );
};

export default DetailCard;
