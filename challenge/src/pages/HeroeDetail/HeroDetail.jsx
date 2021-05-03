import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import HeroesContext from "../../context/superheros/Index";
import MyNavbar from "../Home/components/MyNavbar";
import DetailCard from './DetailCard'

const HeroDetail = () => {
    const { id } = useParams()
    const { heroes } = useContext(HeroesContext)
    let myHero;

    for (let index in heroes){
        if (id === heroes[index].id) {
            myHero = heroes[index]
        }
    }


    return (
        <>
        <MyNavbar/>
        <Container>
            <Row>
                <Col>
                    <DetailCard {...myHero}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default HeroDetail;