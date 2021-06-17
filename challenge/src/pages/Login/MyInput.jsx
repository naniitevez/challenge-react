import './Login.css'
import Form from 'react-bootstrap/Form'

const MyInput = ({controlId, label, type, placeholder, state, setState}) => {
    const changeInputValue = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <Form.Group controlId={controlId}>
              <Form.Label className="form__label">{label}</Form.Label>
              <Form.Control className="form__input" value={state} onChange={changeInputValue} type={type} placeholder={placeholder} />
            </Form.Group>
        </>
    )
}

export default MyInput
