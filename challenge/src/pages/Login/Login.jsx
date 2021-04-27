import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import InputComponent from "./components/InputComponent";

const Login = () => {
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
                />
                <InputComponent
                  idControl={"formBasicPassword"}
                  label={"Contraseña"}
                  type={"password"}
                  placeholder={"Ingresa tu contraseña"}
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
