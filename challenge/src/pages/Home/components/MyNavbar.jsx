import "../Home.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const MyNavbar = ({ isSearching }) => {
  const [searchText, setSearchText] = useState("");
  let userHistory = useHistory();
  const backInHistory = useHistory();
  const search = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    userHistory.push("/");
  };

  const onSearch = () => {
    search.push(`/search/${searchText}`)
  }

  return (
    <div>
      <Navbar className="myNavbar" bg="light" variant="light">
        <Navbar.Brand className="nav-title" href="/home">
          SuperHero Api
        </Navbar.Brand>
        <Form inline>
          <FormControl
            id="searcher"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            placeholder="Busca un personaje..."
            className="mr-sm-2"
            width="30%"
          />
          <Button
            onClick={() => onSearch()}
            disabled={!searchText.length}
            variant="outline-success"
          >
            Buscar
          </Button>
        </Form>
        {isSearching && (
          <Button onClick={() => backInHistory.push("/home")}>
            <i className="fas fa-step-backward"></i>Volver
          </Button>
        )}
        <Button variant="outline-danger" onClick={() => logout()}>
          <i className="fas fa-sign-out-alt"></i>
        </Button>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
