import { Container, Row, Col, Form, Button } from "react-bootstrap";
import callToApi from "../../api/Index";
import "./Login.css";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validSubmit, setValidsubmit] = useState(false);

  const handleValidSubmit = (bool) => {
    if (bool) {
      setValidsubmit(true);
    } else {
      setValidsubmit(false);
    }
  };

  const submitOnClick = async (e) => {
    e.preventDefault()
    if (validSubmit) {
      try {
        await callToApi({url: 'http://challenge-react.alkemy.org?email=challenge@alkemy.org&password=react',
        method: 'POST',
        body: {
          email: inputEmail,
          password: inputPassword
        }})
      } catch (error) {
        alert("Algo salió mal.")
      } finally {
        console.log('terminó el submitOnClick')
      }
    } else {
      alert("Algo salió mal.")
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
