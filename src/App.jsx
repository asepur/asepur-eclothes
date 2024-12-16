import { useState } from 'react';
import Header from './components/organism/Header.jsx';
import BreadCrumb from './components/molecules/BreadCrumb.jsx';
import SizeSelector from './components/molecules/SizeSelector.jsx';
import ColorSelector from './components/molecules/ColorSelector.jsx';
import TagList from './components/molecules/TagList.jsx';
import Reference from './components/atoms/Reference.jsx';
import ThumbnailList from './components/molecules/ThumbnailList.jsx';
import Accordion from './components/molecules/Accordion.jsx';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedImage, setSelectedImage] = useState('src/assets/images/img-product-1.webp');
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  
  const thumbnails = [
    { img:'src/assets/images/img-product-1.webp', link: 'https://i.ibb.co/CwW9BRT/img-product-1.webp'},
    { img: 'src/assets/images/img-product-2.webp', link: 'https://i.ibb.co/z8svvRY/img-product-2.webp'},
    { img: 'src/assets/images/img-product-3.webp', link: 'https://i.ibb.co/n6s3Q3P/img-product-3.webp'},
  ];

  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
    setSelectedImage(thumbnails[index]);
  };

  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleAddToFavorites = () => {
    if (isFavorite) {
      setIsFavorite(false);
      setFavoriteCount(0);
    } else {
      setIsFavorite(true);
      setFavoriteCount(1);
    }
  };

  return (
    <>
    <div className='responsiveModeOff'>
      <Header cartCount={cartCount} favoriteCount={favoriteCount} />
      <section id='content--block'>
        <section className='content'>
          <BreadCrumb />

          <div className='content__container'>
            <ThumbnailList 
              onSelectImage={setSelectedImage} 
              selectedColorIndex={selectedColorIndex}
              setSelectedColorIndex={handleColorChange} // Maneja el cambio de color
            />

            <div className='container__img--principal'>
              <img src={selectedImage} className='content__img--principal' alt="imagen seleccionada" />
            </div>

            <div className='info__product'>
              <TagList />

              <div className='info--title'>
                <span>Sudadera Souls</span>
                <span>17,99€</span>
              </div>

              <Reference />

              <div>
                <span>Sudadera cómoda de la máxima calidad, con tacto suave. <br /> ¡Cada color es único!</span>
                <span>Relaxed fit. Mangas con hombros caídos y puños elásticos</span>
                <span>Hecho en España con algodón orgánico</span>
              </div>

              <div className='enlace--info'>
                <a href="#info--product">Ver más info</a>
              </div>

              <ColorSelector 
                selectedColorIndex={selectedColorIndex}
                setSelectedColorIndex={handleColorChange} // Vincula el cambio de color
              />

              <SizeSelector />

              <div className='btn__container'>
                <button 
                  className='btn btn--primary' 
                  onClick={addToCart}>Añadir al carrito
                </button>

                <button 
                  className='btn btn--secondary' 
                  value='Añadir a favoritos' 
                  id='miBoton' 
                  onClick={handleAddToFavorites}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className='content__info'>
          <div></div>
          <Accordion />
        </div>
        
      </section>
    </div>
    <div className='responsiveModeOn'>
        <img src="/public/responsive.svg" alt="img" />
        <h2>Dispositivo no compatible</h2>
        <p>Demo disponible en dispositivos <i>Desktop</i>.</p>
        <p>Redimensiona o cambia de dispositivo para poder visualizar el diseño.</p>
    </div>
    </>
  );
}

export default App;
