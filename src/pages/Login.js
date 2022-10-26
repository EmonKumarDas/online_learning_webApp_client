import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/AuthProvider';
const Login = () => {
  const { LogInWithForm } = useContext(userContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault()
    const formevent = event.target;
    const email = formevent.email.value;
    const password = formevent.password.value;
    LogInWithForm(email, password).then((userCredential) => {
      const user = userCredential.user;
      navigate('/home');
      console.log(user)
      setError("")
    }).catch((error) => {
      const errorMessage = error.message;
      let getError = errorMessage.slice(1, 8)
      setError(getError)
    });
  }

  return (
    <div className="w-full h-[400px] max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className='text-red-700'>{error}</p>
        <Button variant="primary" type="submit" className="mx-[40%]">
          Submit
        </Button>
      </Form>

    </div>
  );
};

export default Login;