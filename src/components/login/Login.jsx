import React, { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';

function Login() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <SignIn setModalShow={setModalShow} />
      <Register modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
}

export default Login;
