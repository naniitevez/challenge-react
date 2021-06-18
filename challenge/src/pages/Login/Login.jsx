import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import "./Login.css";
import MyInput from "./MyInput";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  let history = useHistory()

  const handleSubmit = async () => {
    let data = {
      email: inputEmail,
      password: inputPassword
    };
    
    let response = await fetch(`http://challenge-react.alkemy.org`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    
    let result = await response.json();

    if (result.error) {
      alert(result.error)
    } else if (result.token) {
      localStorage.setItem('token', result.token)
      history.push("/home")
    }
  }

  if (localStorage.token) {
    history.push("/home")
  }


  return (
    <>
      <Container className="myContainer">
        <div className="form__container">
          <p className="form-title">Login</p>
          <Form className="myForm">
            <MyInput
              valueState={inputEmail}
              setState={setInputEmail}
              controlId={"formBasicEmail"}
              label={"Email"}
              type={"email"}
              placeholder={"Ingresa un mail"}
            />
            <MyInput
              valueState={inputPassword}
              setState={setInputPassword}
              controlId={"formBasicPassword"}
              label={"Contraseña"}
              type={"password"}
              placeholder={"Ingresa la contraseña"}
            />
            <Button
              onClick={handleSubmit}
              id="myButton"
              variant="primary"
              block
            >
              Ingresar
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
