import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroesContext from "../../context/superheros/Index";
import Results from "./Results";
import { Container, Alert } from "react-bootstrap";
import MyNavbar from "../Home/components/MyNavbar";


const Searchresult = () => {
  const { name } = useParams();
  const { token, isSearching, setIsSearching } = useContext(HeroesContext);
  const [results, setResults] = useState([]);

  const getWanterHeroes = async (wantedHero) => {
    setIsSearching(true);
    
    const response = await fetch(
      `https://www.superheroapi.com/api.php/${token}/search/${wantedHero}`
    );
    let data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    getWanterHeroes(name);
  }, []);

  return (
    <>
    <MyNavbar isSearching={isSearching}/>
      <Container>
        <div className="row__container">
          {results ? (
            results.map((result, index) => (
              <Results key={index} results={result} />
            ))
          ) : (
            <Alert variant="danger">
              <h2>Ups! No hemos encontrado al personaje.</h2>{" "}
              <h6>Prueba buscando otro nombre.</h6>
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
};

export default Searchresult;
