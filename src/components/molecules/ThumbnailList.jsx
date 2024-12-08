import './ThumbnailList.css';
import PropTypes from 'prop-types';

function ThumbnailList({ onSelectImage, selectedColorIndex, setSelectedColorIndex }) {
  // Array de imágenes para las miniaturas
  const thumbnails = [
    'src/assets/images/img-product-1.webp',
    'src/assets/images/img-product-2.webp',
    'src/assets/images/img-product-3.webp',
  ];

  return (
    <div className="content__thumbnailList">
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          className={`thumbnail ${index === selectedColorIndex ? 'selected' : ''}`}
          onClick={() => {
            setSelectedColorIndex(index); // Cambia el índice seleccionado en App.jsx
            onSelectImage(thumbnail); // Actualiza la imagen principal
          }}
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      ))}
    </div>
  );
}

// Validación de prop-types
ThumbnailList.propTypes = {
  onSelectImage: PropTypes.func.isRequired,
  selectedColorIndex: PropTypes.number.isRequired, // Asegúrate de que sea un número
  setSelectedColorIndex: PropTypes.func.isRequired, // Validación como función
};

export default ThumbnailList;
