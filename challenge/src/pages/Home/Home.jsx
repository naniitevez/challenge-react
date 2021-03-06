import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import HeroesContext from "../../context/superheros/Index";
import MyCard from "./components/MyCard";
import GroupStats from "./components/GroupStats";

const Home = () => {
  const { heroes, isSearching } = useContext(HeroesContext);

  return (
    <>
      <MyNavbar isSearching={isSearching} />

      <Container>
        <div className="team-stats__container">
          <GroupStats heroes={heroes} />
        </div>
        <div className="row__container">
          {heroes.map((hero, index) => (
            <MyCard key={index} {...hero} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
