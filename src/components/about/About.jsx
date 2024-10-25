import CardMission from './CardMission';
import './StylesAbout.css';

function About() {
    return (
        <div className="about">  
            <div className='row-about'>
                <div className='info-about'>
                    <h2 className="title-about">Historia</h2>
                    <p>
                        El Centro de Educación Continúa Abierta y Virtual, CECAV, 
                        es una Dependencia adscrita a la Vicerrectoría Académica, 
                        fue creado mediante el Acuerdo Superior No. 006 del 29-01-2013, 
                        comienza sus labores en el primer semestre del año 2013 como 
                        un mecanismo de servicio, apoyo y acompañamiento a las Unidades 
                        Académicas de la Universidad, para el desarrollo exitoso de sus 
                        cursos, programas y eventos de educación no formal.
                    </p>
                    <p>
                        El CECAV centra su desarrollo en la planificación, fomento, dirección, 
                        coordinación y evaluación de programas de educación continua y virtual,
                        a partir del trabajo conjunto con las diferentes dependencias 
                        académicas de la Universidad, lo que se convierten en un pilar 
                        fundamental frente a las dinámicas de actualización y perfeccionamiento 
                        de miles de usuarios a nivel local, nacional e internacional, logrando 
                        mantener sus altos estándares de calidad a partir del mejoramiento 
                        continuo de la comunidad universitaria y público en general, estableciendo 
                        dinámicas formativas que aportan al fortalecimiento de sus habilidades y 
                        competencias en diversos campos del saber.
                    </p>
                </div>

                <div className='imag-about'>
                    <img src={'/homeImagenes/historia.jpg'} className="about-image"/>
                </div>
            </div>

            <div className='row-about'>
                <div className='imag-about'>
                    <img  
                    src={'/homeImagenes/historia2.png'} className="about-image"/>
                </div>
                <div className='info-about'>
                    <p>
                        El Centro de Educación Continúa Abierta y Virtual, CECAV, 
                        es una Dependencia adscrita a la Vicerrectoría Académica, 
                        fue creado mediante el Acuerdo Superior No. 006 del 29-01-2013, 
                        comienza sus labores en el primer semestre del año 2013 como 
                        un mecanismo de servicio, apoyo y acompañamiento a las Unidades 
                        Académicas de la Universidad, para el desarrollo exitoso de sus 
                        cursos, programas y eventos de educación no formal.
                    </p>
                    <p>
                        El CECAV centra su desarrollo en la planificación, fomento, dirección, 
                        coordinación y evaluación de programas de educación continua y virtual,
                        a partir del trabajo conjunto con las diferentes dependencias 
                        académicas de la Universidad, lo que se convierten en un pilar 
                        fundamental frente a las dinámicas de actualización y perfeccionamiento 
                        de miles de usuarios a nivel local, nacional e internacional, logrando 
                        mantener sus altos estándares de calidad a partir del mejoramiento 
                        continuo de la comunidad universitaria y público en general, estableciendo 
                        dinámicas formativas que aportan al fortalecimiento de sus habilidades y 
                        competencias en diversos campos del saber.
                    </p>
                </div>
            </div>
            
            <div className='row-about-mission'>
                <CardMission 
                    title="Misión" 
                    info="El CECAV es la unidad de gestión administrativa de la Universidad del Cauca que contribuye a la actualización, profundización y perfeccionamiento de las personas en diversos campos del saber..." 
                />
                <CardMission 
                    title="Visión" 
                    info="Ser el Centro de Educación Continua, Abierta y Virtual líder en el departamento del Cauca para el año 2027, año del bicentenario." 
                />
            </div>

            <div className='row-about-organization-chart'>
            <h2 className='row-about-organization-chart-h2'>Organigrama</h2>
            <p className='row-about-organization-chart-p'>El Centro de Educación Continua, Abierta y Virtual esta adscrita a la Vicerrectoría
                Académica de la Universidad del Cauca.</p>
            <img  src={'/homeImagenes/Organigrama-CECAV.png'} className="about-image-organization-chart"/>
            </div>

        </div>
    );
};

export default About;
