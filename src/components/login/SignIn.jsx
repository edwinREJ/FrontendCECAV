import './StylesLogin.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

function SignIn({ modalShow, setModalShow }) {
  const [isRegister, setIsRegister] = useState(false); // Estado para alternar entre registro e inicio de sesión

  const handleClose = () => setModalShow(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Modal
      open={modalShow}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MDBContainer fluid className="modal-background">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard className="my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                {/* Botón de Cierre */}
                <Button
                  className="button-close"
                  onClick={handleClose}
                  style={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                  X
                </Button>

                <h2 className="fw-bold mb-2 text-uppercase text-blue">CECAV</h2>
                <p className="text-blue mb-5">{isRegister ? 'Registro' : 'Ingresar'}</p>

                {isRegister ? (
                  <>
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Nombre"
                      id="formName"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Usuario"
                      id="formUsername"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Correo"
                      id="formEmail"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Contraseña"
                      id="formPassword"
                      type="password"
                    />

                    <MDBBtn outline className="button-new" color="white" size="lg">
                      Registrarse
                    </MDBBtn>
                  </>
                ) : (
                  <>
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Usuario"
                      id="formControlLg"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-blue"
                      label="Contraseña"
                      id="formControlLg"
                      type="password"
                      size="lg"
                    />

                    <p className="small mb-3 pb-lg-2">
                      <a className="text-blue" href="#!">¿Olvidó su contraseña?</a>
                    </p>

                    <MDBBtn outline className="button-new" color="white" size="lg">
                      Iniciar
                    </MDBBtn>
                  </>
                )}

                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn tag="a" color="none" className="m-3 text-blue">
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn tag="a" color="none" className="m-3 text-blue">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn tag="a" color="none" className="m-3 text-blue">
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">
                    {isRegister ? (
                      <>
                        ¿Ya tienes una cuenta? <a href="#!" className="text-blue fw-bold" onClick={toggleForm}>Inicia sesión</a>
                      </>
                    ) : (
                      <>
                        ¿No tienes una cuenta? <a href="#!" className="text-blue fw-bold" onClick={toggleForm}>Regístrate</a>
                      </>
                    )}
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Modal>
  );
}

export default SignIn;
