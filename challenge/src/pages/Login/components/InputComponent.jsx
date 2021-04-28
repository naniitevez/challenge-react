import Form from "react-bootstrap/Form";

const InputComponent = ({
  validation,
  handleSubmit,
  state,
  setState,
  idControl,
  label,
  type,
  placeholder,
}) => {
  
  const inputValidation = (e) => {
    setState(e.target.value);
  };
  
  //Al ser ejecutado por las funciones OnKeyUp y OnBlur, 
  const handleValidation = (e) => {
    handleSubmit(e.target.value)
    if (state === "") {
      validation = false 
    } else  {
      validation = true
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
        {!validation && (
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
