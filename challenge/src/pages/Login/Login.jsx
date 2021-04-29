import { Container, Row, Col, Form, Button } from "react-bootstrap";
import callToApi from "../../api/Index";
import "./Login.css";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validSubmit, setValidsubmit] = useState(false);

  //Esta funcion se encarga de hacer la validación final, recibiendo un booleano si
  //los items fueron completados.
  const handleValidSubmit = (bool) => {
    if (bool) {
      setValidsubmit(true);
    } else {
      setValidsubmit(false);
    }
  };

  //Al clickear el boton de ingresar, se realiza el fetch post
  //y se guarda el token el localstorage
  const submitOnClick = async (e) => {
    e.preventDefault()
    
    if (validSubmit) {
      let data = `?email=${inputEmail}&password=${inputPassword}`

      try {
        const response = await callToApi({url: `http://challenge-react.alkemy.org${data}`,
        method: 'POST',
        body: {
          email: inputEmail,
          password: inputPassword
        }})
        
        localStorage.setItem('token', response.token)

      } catch (error) {
        alert("Algo salió mal.")
      }
    } else {
      alert("Verifica que todos los campos estén completos.")
    }

  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="form__container">
              <div className="form__border">
                <InputComponent
                  idControl={"formBasicEmail"}
                  label={"Email"}
                  type={"email"}
                  placeholder={"Ingresa tu dirección email"}
                  state={inputEmail}
                  setState={setInputEmail}
                  handleValidSubmit={(bool) => handleValidSubmit(bool)}
                />
                <InputComponent
                  idControl={"formBasicPassword"}
                  label={"Contraseña"}
                  type={"password"}
                  placeholder={"Ingresa tu contraseña"}
                  state={inputPassword}
                  setState={setInputPassword}
                  handleValidSubmit={(bool) => handleValidSubmit(bool)}
                />
                <Button
                  onClick={submitOnClick}
                  className="form__button"
                  variant="light"
                  type="submit"
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
