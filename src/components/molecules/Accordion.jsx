// Accordion.jsx
import './Accordion.css';
import { useState } from 'react';

function Accordion() {
  // Estados para manejar cada acordeón
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Funciones para cambiar el estado de cada acordeón
  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);

  return (
    <div className='accordion__grid'>
      {/* Acordeon 1 */}
      <div className='accordion'>
        <div className='accordion__title' onClick={toggleAccordion1}>
          <span id='info--product' className={`accordion-icon ${isOpen1 ? 'open' : ''}`}>{isOpen1 ? '▼' : '▼'}</span>
          <h5>Detalles del producto</h5>
        </div>
        {isOpen1 && (
          <div className="accordion-content">
            <span>Sudadera cómoda de la máxima calidad, con tacto suave. <br /> ¡Cada  color es único!</span>
            <span>Relaxed fit. Mangas con hombros caídos y puños elásticos</span>
            <span>Hecho en España con algodón orgánico.</span>
          </div>
        )}
      </div>  

      {/* Acordeon 2 */}
      <div className='accordion'>
        <div className='accordion__title' onClick={toggleAccordion2}>
          <span className={`accordion-icon ${isOpen2 ? 'open' : ''}`}>{isOpen2 ? '▼' : '▼'}</span>
          <h5>Especificaciones técnicas</h5>
        </div>
        {isOpen2 && (
          <div className="accordion-content">
            <p>Aquí se añadirán las especificaciones técnicas del producto...</p>
          </div>
        )}
      </div> 

      {/* Acordeon 3 */}
      <div className='accordion'>
        <div className='accordion__title' onClick={toggleAccordion3}>
          <span className={`accordion-icon ${isOpen3 ? 'open' : ''}`}>{isOpen3 ? '▼' : '▼'}</span>
          <h5>Opiniones</h5>
        </div>
        {isOpen3 && (
          <div className="accordion-content">
            <p>Aquí irían opiniones de los clientes sobre este producto...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
