
import './StylesStart.css'

function Summary() {
    return (
      
        <div className="Summary" >
         
          <div className='summary-info'>
            <h2>Centro De Educación, Continua, Abierta Y Virtual</h2>
            <p>
            El Centro de Educación Continúa Abierta y Virtual, CECAV, 
            es una Dependencia adscrita a la Vicerrectoría Académica, 
            creada mediante el Acuerdo Superior No. 006 del 29-01-2013, 
            comienza sus labores en el primer semestre del año 2013 
            como un mecanismo de servicio, apoyo y acompañamiento a las 
            Unidades Académicas de la Universidad, para el desarrollo 
            exitoso de sus cursos, programas y eventos de educación no formal.
            </p>
            <p>
            Centra su desarrollo en la planificación, fomento, dirección, coordinación
            y evaluación de programas de educación continua y virtual, a partir del 
            trabajo conjunto con las diferentes dependencias académicas de la Universidad,
            lo que se convierten en un pilar fundamental frente a las dinámicas de 
            actualización y perfeccionamiento de miles de usuarios a nivel local, 
            nacional e internacional, logrando mantener sus estándares de calidad a 
            partir del mejoramiento continuo de la comunidad universitaria y público 
            en general, estableciendo dinámicas formativas que aportan al fortalecimiento
            de sus habilidades y competencias en diversos campos del saber.
            </p>
          </div>

          <div className='summary-imag'>
          <img src={'/homeImagenes/info.png'}/>
          </div>

        </div>
     
    )
  }export default Summary; 