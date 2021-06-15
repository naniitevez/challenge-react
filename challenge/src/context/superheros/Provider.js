import { useState, useEffect } from "react";
import HeroesContext from "./Index"


const HeroesProvider = ({children}) => {
    const token = 1816870085187288;
    const [heroes, setHeroes] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
  
    //Genero un numero aleatorio para el llamado a la apipor ID.
    const randomNumber = (max, min) => {
      const randomNumber = Math.random() * max + min;
      const number = Math.ceil(randomNumber);
      return number;
    };
  
    useEffect(() => {
      const getRandomHeroes = async (random) => {
        const response = await fetch(
          `https://superheroapi.com/api.php/${token}/${random}`
        );
        const hero = await response.json();
        return hero;
      };
      const getSuperHeroes = async () => {
        const response1 = await getRandomHeroes(randomNumber(731, 1));
        const response2 = await getRandomHeroes(randomNumber(731, 1));
        const response3 = await getRandomHeroes(randomNumber(731, 1));
        const response4 = await getRandomHeroes(randomNumber(731, 1));
        const response5 = await getRandomHeroes(randomNumber(731, 1));
        const response6 = await getRandomHeroes(randomNumber(731, 1));
        const getAllData = await Promise.all([
          response1,
          response2,
          response3,
          response4,
          response5,
          response6
        ]);
        setHeroes(getAllData);
      };
      getSuperHeroes();
    }, []);

    return (
        <HeroesContext.Provider value={{heroes, token, isSearching, setIsSearching}}>
            {children}
        </HeroesContext.Provider>
    )
}

export default HeroesProvider;