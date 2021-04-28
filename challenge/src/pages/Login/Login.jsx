import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (validationState) => {
    setIsValid(validationState)
    if (validationState) {
      console.log('la validacion es true. Submit')
      console.log(validationState)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="form__container">
              <div className="form__border">
                <InputComponent
                  validation={isValid}
                  handleSubmit={validationState => handleSubmit(validationState)}
                  idControl={"formBasicEmail"}
                  label={"Email"}
                  type={"email"}
                  placeholder={"Ingresa tu dirección email"}
                  state={inputEmail}
                  setState={setInputEmail}
                />
                <InputComponent
                  idControl={"formBasicPassword"}
                  label={"Contraseña"}
                  type={"password"}
                  placeholder={"Ingresa tu contraseña"}
                  state={inputPassword}
                  setState={setInputPassword}
                />
                <Button className="form__button" variant="light" type="submit">
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
