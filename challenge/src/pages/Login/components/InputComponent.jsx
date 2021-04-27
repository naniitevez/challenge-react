import Form from 'react-bootstrap/Form'

const InputComponent = ({idControl, label, type, placeholder}) => {
  return (
    <Form.Group controlId={idControl}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="form__input"
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default InputComponent;
