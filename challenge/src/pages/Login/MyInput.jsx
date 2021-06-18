import "./Login.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const MyInput = ({ controlId, label, type, placeholder, valueState, setState }) => {
  const [warningText, setWarningText] = useState(false);

  const changeInputValue = (e) => {
    setState(e.target.value);
  };

  const handleValidation = () => {
      if (valueState === "") {
          setWarningText(true);
        } else {
            setWarningText(false);
        }
  };

  return (
    <>
      <Form.Group controlId={controlId}>
        <Form.Label className="form__label">{label}</Form.Label>
        <Form.Control
          className="form__input"
          value={valueState}
          onChange={changeInputValue}
          onKeyUp={handleValidation}
          onBlur={handleValidation}
          type={type}
          placeholder={placeholder}
        />
        {warningText && (
          <div>
            <Form.Text className="form-validation">
              El campo {label.toLowerCase()} no puede estar vacío.
            </Form.Text>
          </div>
        )}
      </Form.Group>
    </>
  );
};

export default MyInput;
