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
        <p>Salir</p>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
