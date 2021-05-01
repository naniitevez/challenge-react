import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import MyCards from "./components/MyCards";
import { useContext } from "react";
import HeroesContext from "../../context/superheros/Index";

const Home = () => {
  const { heroes } = useContext(HeroesContext);

  return (
    <>
      <MyNavbar />
      <button onClick={() => console.log(heroes)}>CliCK</button>
      <Container>
        <div className="row__container">
            {heroes.map((hero, index) => <MyCards key={index} {...hero} />)}
            {/* <Col xs={12} md={6} lg={4}>
              <MyCards />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <MyCards />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <MyCards />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <MyCards />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <MyCards />
            </Col> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
