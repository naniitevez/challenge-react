import '../Home.css'
import  {Navbar, Form, FormControl, Button} from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="myNavbar" bg="light" variant="light">
        <Navbar.Brand href="/home">SuperHero Api</Navbar.Brand>
        <Form inline>
          <FormControl id="searcher" type="text" placeholder="Escribe el nombre de un personaje..." className="mr-sm-2" width="30%" />
          <Button variant="outline-primary">Buscar</Button>
        </Form>
        <p>Salir</p>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
