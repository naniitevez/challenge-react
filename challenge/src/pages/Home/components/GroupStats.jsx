import { Row, Col } from "react-bootstrap";
import "./GroupStats.css";

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
  let averagedStats = [];
  let groupCategory;

  //Este metodo identifica, entre los powerstats acumulados, cual es el mayor
  //para categorizar al grupo.
  const averageStats = () => {
    averagedStats.push(teamCombat);
    averagedStats.push(teamDurability);
    averagedStats.push(teamIntelligence);
    averagedStats.push(teamPower);
    averagedStats.push(teamSpeed);
    averagedStats.push(teamStrength);

    let max = 0;
    for (let i = 0; i < averagedStats.length; i++) {
      if (averagedStats[i] > max) {
        max = averagedStats[i];
      }
    }
    if (max === teamCombat) {
      groupCategory = `Combate (${teamCombat} pts)`;
    } else if (max === teamDurability) {
      groupCategory = `Durabilidad (${teamDurability} pts)`;
    } else if (max === teamIntelligence) {
      groupCategory = `Inteligencia (${teamIntelligence} pts)`;
    } else if (max === teamPower) {
      groupCategory = `Energía (${teamPower} pts)`;
    } else if (max === teamSpeed) {
      groupCategory = `Velocidad (${teamSpeed} pts)`;
    } else {
      groupCategory = `Fuerza (${teamStrength} pts)`;
    }
  };

  for (let i = 0; i < heroes.length; i++) {
    stats.push(heroes[i].powerstats);
    weightStats.push(heroes[i].appearance.weight[1]);
    heightStats.push(heroes[i].appearance.height[1]);
  }

  //itero los heroes para obtener un array con todos los valores de los powerstats.
  if (stats.length) {
    for (let i = 0; i < stats.length; i++) {
      combat.push(stats[i].combat);
      durability.push(stats[i].durability);
      intelligence.push(stats[i].intelligence);
      power.push(stats[i].power);
      speed.push(stats[i].speed);
      strength.push(stats[i].strength);
    }

    //elimino los valores nulos y convierto los valores string en numeros
    //para luego poder sumarlos.
    combatStat = combat.filter((stat) => stat !== "null").map((i) => Number(i));
    durabilityStat = durability
      .filter((stat) => stat !== "null")
      .map((i) => Number(i));
    intelligenceStat = intelligence
      .filter((stat) => stat !== "null")
      .map((i) => Number(i));
    powerStat = power.filter((stat) => stat !== "null").map((i) => Number(i));
    speedStat = combat.filter((stat) => stat !== "null").map((i) => Number(i));
    strengthStat = combat
      .filter((stat) => stat !== "null")
      .map((i) => Number(i));

    teamCombat = combatStat.reduce(reducer);
    teamDurability = durabilityStat.reduce(reducer);
    teamIntelligence = intelligenceStat.reduce(reducer);
    teamPower = powerStat.reduce(reducer);
    teamSpeed = speedStat.reduce(reducer);
    teamStrength = strengthStat.reduce(reducer);

    averageStats();
  }

  //Hago el mismo procedimiento anterior pero con los pesos y alturas
  //para calcular los promedios.
  if (weightStats.length) {
    let weight = [];
    for (let i = 0; i < weightStats.length; i++) {
      let element = weightStats[i].replace(" kg", "");
      weight.push(element);
    }
    let totalWeight = weight.map((i) => Number(i));
    teamWeight = totalWeight.reduce(reducer);
  }

  if (heightStats.length) {
    let height = [];
    for (let i = 0; i < heightStats.length; i++) {
      let element = heightStats[i].replace(" cm", "");
      height.push(element);
    }
    let totalHeight = height.map((i) => Number(i));
    teamHeight = totalHeight.reduce(reducer);
  }

  return (
    <>
      <Row>
        <h3 className="stats-title">
          <em>Estadísticas del grupo:</em>
        </h3>
      </Row>
      <Row>
        <h5 className="h6-titles stats-title">
          Grupo destacado por su {groupCategory}
        </h5>
      </Row>
      <Row  className="row__stats">
        <Col className="col__average" md={4}>
          <div>
            <h6 className="h6-titles">Peso promedio del grupo: </h6>
            {`${teamWeight} kg`}
          </div>
          <div>
            <h6 className="h6-titles">Altura promedio del grupo: </h6>
            {`${teamHeight} cm`}
          </div>
        </Col>
        <Col>
          <Row>
            <Col className="col__stats">
              <div>
                <h6 className="h6-titles">Combate: {`${teamCombat} pts`}</h6>
              </div>
              <div>
                <h6 className="h6-titles">
                  Durabilidad: {`${teamDurability} pts`}
                </h6>
              </div>
              <div>
                <h6 className="h6-titles">
                  Inteligencia: {`${teamIntelligence} pts`}
                </h6>
              </div>
            </Col>
            <Col className="col__stats">
              <div>
                <h6 className="h6-titles">Energía: {`${teamPower} pts`}</h6>
              </div>
              <div>
                <h6 className="h6-titles">Velocidad: {`${teamSpeed} pts`}</h6>
              </div>
              <div>
                <h6 className="h6-titles">Fuerza: {`${teamStrength} pts`}</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default GroupStats;
