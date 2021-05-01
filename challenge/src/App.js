import 'bootstrap/dist/css/bootstrap.min.css';
import HeroesProvider from './context/superheros/Provider';
import Routes from './routes/Routes';

function App() {
    return (
        <HeroesProvider>
            <Routes/>
        </HeroesProvider>
    );
}

export default App;