import CarouselCECAV from './CarouselCECAV'
import Summary from './Summary'
import '../../App.css';
import { Link} from 'react-router-dom';
import CardEvento from '../events/CardEvent';
import { useState } from 'react';
import Button from '@mui/joy/Button';

export default function Start() {
    const [activeTab, setActiveTab] = useState('noticias');

    const noticias = [
        {
            title: '‘Diálogos con el corno’, el Primer Encuentro de Cornistas que gestamos y real',
            info: 'Con el apoyo del Centro de Educación Continua, Abierta y Virtual Cecav, y como resultado de los grandes esfuerzos realizados por la Facultad de Artes, el Departamento de Música.',
        },
        {
            title: 'Título de la Noticia 2',
            info: 'Información sobre la noticia 2...',
        },
        {
            title: 'Título de la Noticia 3',
            info: 'Información sobre la noticia 3...',
        },
        {
            title: 'Título de la Noticia 4',
            info: 'Información sobre la noticia 4...',
        },
        {
            title: 'Título de la Noticia 5',
            info: 'Información sobre la noticia 5...',
        },
    ];

    const cursos = [
        {
            title: 'Curso 1',
            info: 'Información sobre el curso 1',
        },
        {
            title: 'Curso 2',
            info: 'Información sobre el curso 2',
        },
        {
            title: 'Curso 3',
            info: 'Información sobre el curso 3',
        },
    ];

    // Cambiar la pestaña activa al hacer clic
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="Start">
            
              {/* Imagenes */}
            <div className='head-start'>
                <CarouselCECAV />
            </div>
            
            {/* Resumen */}
            <div className='body-start'>
                <Summary />
            </div>
             
             {/* ^Menú de noticias y eventos */}
            <div className='body-start-info'>
            <div className='body-start-info-menu'>
                <Button
                    component={Link}
                   
                    className={`body-start-info-menu-button-new ${activeTab === 'noticias' ? 'active' : ''}`}
                    onClick={() => handleTabChange('noticias')}
                >
                    Noticias
                </Button>

                <Button
                    component={Link}
                    
                    className={`body-start-info-menu-button-new ${activeTab === 'cursos' ? 'active' : ''}`}
                    onClick={() => handleTabChange('cursos')}
                >
                    Educación Continua
                </Button>
            </div>


                {/* Contenido */}
                <div className='body-start-info-card'>
                    {/* Mostrar solo 3 elementos basado en la pestaña activa */}
                    {activeTab === 'noticias' ? (
                        noticias.slice(0, 3).map((noticia, index) => (
                            <CardEvento 
                                key={index}
                                title={noticia.title} 
                                info={noticia.info} 
                            />
                        ))
                    ) : (
                        cursos.slice(0, 3).map((curso, index) => (
                            <CardEvento 
                                key={index}
                                title={curso.title} 
                                info={curso.info} 
                            />
                        ))
                    )}
                </div>

                {/* Botón para ver todo, cambiando el enlace según la pestaña activa */}
                <div className='body-start-info-see-all'>
                    <Link to={activeTab === 'noticias' ? "/start/noticias" : "/start/cursos"}>
                        <Button className='button-new'>
                            VER TODO
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}