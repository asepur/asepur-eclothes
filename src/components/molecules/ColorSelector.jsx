import './Selector.css';
import PropTypes from 'prop-types';

function ColorSelector({ selectedColorIndex, setSelectedColorIndex }) {
  const colors = ['Beige', 'Azul', 'Verde'];

  return (
    <div className='bloque__seleccion'>
      <span className='title'>Colores</span>
      <div className="seleccionable">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color ${index === selectedColorIndex ? 'selected' : ''}`}
            onClick={() => setSelectedColorIndex(index)} // Cambia el índice al hacer clic
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

// Validación de prop-types
ColorSelector.propTypes = {
  selectedColorIndex: PropTypes.number.isRequired,
  setSelectedColorIndex: PropTypes.func.isRequired,
};

export default ColorSelector;
