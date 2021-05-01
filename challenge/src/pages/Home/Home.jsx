import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import HeroesContext from "../../context/superheros/Index";
import MyCard from "./components/MyCard";

const Home = () => {
  const { heroes, token } = useContext(HeroesContext);

  return (
    <>
      <MyNavbar />
      <button onClick={() => console.log(heroes)}>CliCK</button>
      <Container>
        <div className="row__container">
            {
              heroes.map((hero, index) => <MyCard key={index} {...hero} token={token} />)
            }
        </div>
      </Container>
    </>
  );
};

export default Home;
