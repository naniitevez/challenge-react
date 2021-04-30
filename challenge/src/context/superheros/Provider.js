import { useState } from "react";
import HeroesContext from "./Index"
import callToApi from '../../api/Index'


const HeroesProvider = ({children}) => {
    const [heroes, setHeroes] = useState([])

    const getHeroes = async () => {
        try {
            const heroesResult = await callToApi({url: `https://superheroapi.com/api/1816870085187288`})
            setHeroes(heroesResult)
            console.log(heroes)
        } catch {
            setHeroes([])
        }
    }

    return (
        <HeroesContext.Provider>
            {children}
        </HeroesContext.Provider>
    )
}

export default HeroesProvider;