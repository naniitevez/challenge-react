import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import HeroesContext from "../../context/superheros/Index";
import MyCard from "./components/MyCard";
import Searchresult from "../SearchResult/SearchResult";
import GroupStats from "./components/GroupStats";

const Home = () => {
  const { heroes, token } = useContext(HeroesContext);
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])

  const handleOnSearchClick = async (searchText) => {
    setIsSearching(true)

    const response = await fetch (`https://api.allorigins.win/get?url=https://www.superheroapi.com/api.php/${token}/search/${searchText}`)
    let data = await response.json()
    data = JSON.parse(data.contents)
    setResults(data.results)
  }
 
  return (
    <>
      <MyNavbar onSearch={handleOnSearchClick}/> 
      <Container>
        <div className="team-stats__container">
          <GroupStats heroes={heroes}/>
        </div>
      </Container>
      <Container>
        {
          !isSearching ?
          (<div className="row__container">
            {
              heroes.map((hero, index) => <MyCard key={index} {...hero}/>)
            }
          </div>) : 
          (
            <div className="row__container">
              {
                results.map((result, index) => <Searchresult key={index} results={result}/>)
              }
            </div>
          )
        }
      </Container>
    </>
  );
};

export default Home;
