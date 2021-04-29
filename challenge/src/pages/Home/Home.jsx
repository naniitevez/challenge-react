import {useHistory} from 'react-router-dom'

const Home = () => {
    let historia = useHistory()
    return (
        <div>This is the Home component

            <button onClick={()=>historia.push("/")}>Click</button>
        </div>
    );
}
 
export default Home;