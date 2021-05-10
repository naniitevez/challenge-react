import { Row, Col } from "react-bootstrap";
import './GroupStats.css'

const GroupStats = ({ heroes }) => {
  let stats = [];
  let weightStats = [];
  let heightStats = [];
  let teamWeight = [];
  let teamHeight = [];
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
    weightStats.push(heroes[i].appearance.weight[1])
    heightStats.push(heroes[i].appearance.height[1])
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
  
  if (weightStats.length) {
    let weight = []
    for (let i = 0; i < weightStats.length; i++) {
      let element = weightStats[i].replace(' kg', '')
      weight.push(element)
    }
    let totalWeight = weight.map((i) => Number(i))
    teamWeight = totalWeight.reduce(reducer)
  }
  
  if (heightStats.length) {
    let height = []
    for (let i = 0; i < heightStats.length; i++) {
      let element = heightStats[i].replace(' cm', '')
      height.push(element)
    }
    let totalHeight = height.map((i) => Number(i))
    teamHeight = totalHeight.reduce(reducer)
  }
  
  return (
    <>
      <Row>
        <h2 className="stats-title"><em>Estadísticas del grupo:</em></h2>
      </Row>
      <Row>
        <Col md={4}>
            <div style={{color: "#f9eac3"}}>
              <h5 className="h5-titles">Peso promedio del grupo: </h5>
              {`${teamWeight} kg`}
            </div>
            <div style={{color: "#f9eac3"}}>
              <h5 className="h5-titles">Altura promedio del grupo: </h5>
              {`${teamHeight} cm`}
            </div>
        </Col>
        <Col>
          {/* <Row>
            <h5 className="h5-titles">Poder Destacado del grupo: </h5>
          </Row> */}
          <Row>
            <Col>
              <div>
                <h5 className="h5-titles">Combate: {teamCombat}</h5>
              </div>
              <div>
                <h5 className="h5-titles">Durabilidad: {teamDurability}</h5>
              </div>
              <div>
                <h5 className="h5-titles">Inteligencia: {teamIntelligence}</h5>
              </div>
            </Col>
            <Col>
              <div>
                <h5 className="h5-titles">Energía: {teamPower}</h5>
              </div>
              <div>
                <h5 className="h5-titles">Velocidad: {teamSpeed}</h5>
              </div>
              <div>
                <h5 className="h5-titles">Fuerza: {teamStrength}</h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default GroupStats;
