import './StylesHome.css';
import MainMenu from './MainMenu';
import { Outlet } from "react-router-dom";
import SignIn from '../login/SignIn';
import { Button } from '@mui/material';
import { useState } from 'react';

function Layout() {
    // Estado para controlar la apertura del modal
    const [modalShow, setModalShow] = useState(false);

    // Funciones para manejar la apertura y el cierre del modal
    const handleClickOpen = () => {
        setModalShow(true);
    };
    
    return (
        <div className="Layout">
            <div className="Header">
                <div className='header-login'>
                    <Button className='button-new' onClick={handleClickOpen}>
                        Login
                    </Button>
                </div>
                <div className='header-title'>
                    <h1><span className="line-center">Centro</span> de Educación, Continua, Abierta y Virtual CECAV</h1>
                </div>
                <div className='header-main-menu'>
                    <MainMenu />
                </div>
            </div>

            <div className="Body">
                <Outlet /> 
            </div>

            <div className="Footer">
                {/* Contenido del footer */}
            </div>

            {/* Modal para iniciar sesión */}
            <SignIn modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default Layout;
