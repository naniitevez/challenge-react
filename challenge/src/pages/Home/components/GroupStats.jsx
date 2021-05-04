import { Row, Col } from "react-bootstrap";

const GroupStats = ({ heroes }) => {
  let stats = [];
  let combat = [];
  let durability = [];
  let intelligence = [];
  let power = [];
  let speed = [];
  let strength = [];
  let combatStat;
  let durabilityStat;
  let intelligenceStat;
  let powerStat;
  let speedStat;
  let strengthStat;
  const reducer = (acc, cur) => acc + cur; 
  let teamCombat;
  let teamDurability;
  let teamIntelligence;
  let teamPower;
  let teamSpeed;
  let teamStrength;

  for (let i = 0; i < heroes.length; i++) {
    stats.push(heroes[i].powerstats);
  }

  if (stats.length) {
    for (let i = 0; i < stats.length; i++) {
      combat.push(stats[i].combat);
      durability.push(stats[i].durability);
      intelligence.push(stats[i].intelligence);
      power.push(stats[i].power);
      speed.push(stats[i].speed);
      strength.push(stats[i].strength);
    }
    combatStat = combat.filter((stat) => stat !== "null").map((i) => Number(i));
    durabilityStat = durability.filter((stat) => stat !== "null").map((i) => Number(i));
    intelligenceStat = intelligence.filter((stat) => stat !== "null").map((i) => Number(i));
    powerStat = power.filter((stat) => stat !== "null").map((i) => Number(i));
    speedStat = combat.filter((stat) => stat !== "null").map((i) => Number(i));
    strengthStat = combat.filter((stat) => stat !== "null").map((i) => Number(i));

    teamCombat = combatStat.reduce(reducer)
    teamDurability = durabilityStat.reduce(reducer)
    teamIntelligence = intelligenceStat.reduce(reducer)
    teamPower = powerStat.reduce(reducer)
    teamSpeed = speedStat.reduce(reducer)
    teamStrength = strengthStat.reduce(reducer)
  }

  return (
    <>
      <Row>
        <h2>Estadísticas del grupo:</h2>
      </Row>
      <Row>
        <Col md={4}>
          <p>
            <h5>Peso promedio del grupo:</h5>
            {}
          </p>
          <p>
            <h5>Altura promedio del grupo:</h5>
            {}
          </p>
        </Col>
        <Col>
          <Row>
            <h5>Poderes acumulativos del grupo:</h5>
          </Row>
          <Row>
            <Col>
              <div>
                <h5>Combate: {teamCombat}</h5>
              </div>
              <div>
                <h5>Durabilidad: {teamDurability}</h5>
              </div>
              <div>
                <h5>Inteligencia: {teamIntelligence}</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Energía: {teamPower}</h5>
              </div>
              <div>
                <h5>Velocidad: {teamSpeed}</h5>
              </div>
              <div>
                <h5>Fuerza: {teamStrength}</h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default GroupStats;
