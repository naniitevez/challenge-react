import { useState } from "react";
import Form from "react-bootstrap/Form";
import '../Login.css'

const InputComponent = ({
  handleValidSubmit,
  state,
  setState,
  idControl,
  label,
  type,
  placeholder,
}) => {
  const [warningText, setWarningText] = useState(false)
  
  const inputValidation = (e) => {
    setState(e.target.value);
  };
  
  //Se ejecuta con las funciones onKeyUp y onBlur
  //actualiza el estado encargado de renderizar el texto advertencia.
  const handleValidation = (e) => {
    if (state === "") {
      setWarningText(true) 
      handleValidSubmit(false)
    } else  {
      setWarningText(false)
      handleValidSubmit(true)
    }
  }

  return (
    <>
      <Form.Group controlId={idControl}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className="form__input"
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={inputValidation}
          onKeyUp={handleValidation}
          onBlur={handleValidation}
        />
        {warningText && (
          <div>
            <Form.Text id="text-muted">
              El campo de {label} no puede estar vacío.
            </Form.Text>
          </div>
        )}
      </Form.Group>
    </>
  );
};

export default InputComponent;
