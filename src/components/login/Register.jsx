import React from 'react';
import Modal from '@mui/material/Modal';
import { MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Register({ modalShow, setModalShow }) {
  const handleClose = () => setModalShow(false);

  return (
    <Modal
      open={modalShow}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{marginTop: '3%'}}
    >
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='modal-container mx-auto'>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                
                <h2 className="fw-bold mb-2 text-uppercase text-primary-custom">CECAV</h2>
                <p className="mb-5 text-primary-custom">Registro</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Nombre' id='formName' type='text'/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Usuario' id='formUsername' type='text'/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Correo' id='formEmail' type='email'/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Contraseña' id='formPassword' type='password'/>

                <MDBBtn outline className='mx-2 px-5' color='primary' size='lg' onClick={handleClose}>
                  Registrarse
                </MDBBtn>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Modal>
  );
}

export default Register;

