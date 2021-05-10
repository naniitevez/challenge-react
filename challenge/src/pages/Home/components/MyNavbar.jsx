import '../Home.css'
import  {Navbar, Form, FormControl, Button} from 'react-bootstrap'
import { useState } from 'react';

const MyNavbar = ({onSearch}) => {
  const [searchText, setSearchText] = useState("")

  return (
    <div>
      <Navbar className="myNavbar" bg="light" variant="light">
        <Navbar.Brand href="/home">SuperHero Api</Navbar.Brand>
        <Form inline>
          <FormControl id="searcher" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} type="text" placeholder="Escribe el nombre de un personaje..." className="mr-sm-2" width="30%" />
          <Button onClick={() => onSearch(searchText)} disabled={!searchText.length} variant="outline-primary">Buscar</Button>
        </Form>
        <button>
          {/* Tengo que crear un state que verifique si estoy en home o no, si no estoy
          debo renderizar este botón para volver, ya sea desde detalle o desde el buscador */}
          Back
        </button>
        <p>Salir</p>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
