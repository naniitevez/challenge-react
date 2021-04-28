import Form from "react-bootstrap/Form";

const InputComponent = ({
  state,
  setState,
  estado,
  setEstado,
  idControl,
  label,
  type,
  placeholder,
}) => {
  let valid = true;

  const validations = () => {
    if (state === "") {
      valid = false
    } else {
      valid = true
    }
  }

  const inputValidation = (e) => {
    setState(e.target.value)
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
          onKeyUp={() => console.log("on KEY UP")}
          onBlur={() => console.log("on BLUR")}
        />
      {!valid && (
        <div>
          <Form.Text className="text-muted">
            El campo de {label} no puede estar vacío.
          </Form.Text>
        </div>
      )}
      </Form.Group>
    </>
  );
};

export default InputComponent;
