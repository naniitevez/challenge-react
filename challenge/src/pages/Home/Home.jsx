import { useState } from "react";
import callToApi from '../../api/Index'
import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import MyCards from "./components/MyCards";


const Home = () => {
  const token = 1816870085187288;
  const [heroes, setHeroes] = useState([])

  //Este metodo genera numeros aleatorios del 1 al 731 (cantidad de superheroes en la api)
  //y se lo pasa a la funcion que hace el llamado a la api.
  const idNumber = () => {
    let num = Math.floor(Math.random() * (731 - 1 + 1)) + 1;
    getSuperHero(num)
  };


  const getSuperHero = async (id) => {
    
     try {const heroesResult = await callToApi ({url: `https://superheroapi.com/api/${token}/${id}`})
    setHeroes([...heroes, heroesResult])
    } catch (error) {
      setHeroes([])
    }
  }
  console.log(heroes)

  return (
    <>
      <MyNavbar/>
      <button onClick={idNumber}>CliCK</button>
      <Container fluid>
        <div className="row__container">
          <Row>
            <h2>1º Team</h2>
          </Row>
          <Row className ="myrow">
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
          </Row>
        </div>
        <div className="row__container">
          <Row>
            <h2>1º Team</h2>
          </Row>
          <Row className ="myrow">
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={2} >
              <MyCards/>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
