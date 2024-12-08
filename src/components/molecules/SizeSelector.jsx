import './Selector.css';
import { useState } from 'react';



function SizeSelector() {
    // Estado para almacenar el índice de la miniatura seleccionada
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Array de miniaturas (puedes reemplazar con tus imágenes reales o IDs)
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
        <div className='bloque__seleccion'>
            <span className='title'>Tallas</span>
            <div className="seleccionable">
                {sizes.map((size, index) => (
                    <div
                        key={index}
                        className={`size ${index === selectedIndex ? 'selected' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {/* Aquí iría la imagen o el contenido de cada miniatura */}
                        {size}
                    </div>
                ))}
        </div>
        </div>
        
    );
}

export default SizeSelector;
