import './Header.css';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBagShopping, faHeart, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header({cartCount, favoriteCount}) {


  return (
    <div className="header">
      <div className='header__nav'>
          <div className='header__nav--icon'>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h4 className='header__logo'>
            ec(l)othes
          </h4>
        </div>
        <div className='header__nav'>
          <div className='header__buscador'>
              <input type="text" name="" id="" placeholder='¿Qué estás buscando?' />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          
          <div className='header__nav--icon'>
            <FontAwesomeIcon icon={faHeart} style={{ color: favoriteCount > 0 ? 'red' : '' }}/>
            <span className='cart-favorite'>{favoriteCount}</span>
          </div>
          <div className='header__nav--icon'>
            <FontAwesomeIcon icon={faBagShopping} />
            <span className='cart--product'>{cartCount}</span>
          </div>
          <div className='header__nav--icon'>
            <FontAwesomeIcon icon={faUser}/>
          </div>

        </div>


    </div>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default Header;
