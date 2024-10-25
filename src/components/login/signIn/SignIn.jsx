import './StylesSignIn.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
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
  const handleClose = () => setModalShow(false);

  return (
    <Modal
      open={modalShow}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                {/* Botón de Cierre */}
                <Button className='button-new'
                 onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
                  X
                </Button>

                <h2 className="fw-bold mb-2 text-uppercase">CECAV</h2>
                <p className="text-white-50 mb-5">Ingresar</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Usuario' id='formControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Contraseña' id='formControlLg' type='password' size="lg" />

                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">¿Olvidó su contraseña?</a></p>

                <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                  Iniciar
                </MDBBtn>

                <div className='d-flex flex-row mt-3 mb-5'>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg" />
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">¿No tienes una cuenta?  <a href="#!" className="text-white-50 fw-bold">Regístrate</a></p>
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

