import './ThumbnailList.css';
import PropTypes from 'prop-types';
import { thumbnails } from '../../data/thumbnails';

function ThumbnailList({ onSelectImage, selectedColorIndex, setSelectedColorIndex }) {

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
          style={{ backgroundImage: `url(${thumbnail.img})` }}
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
