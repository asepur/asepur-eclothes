
import '../molecules/TagList.css';
import PropTypes from 'prop-types';

function Tag({type}) {

  const tagText = type === 'eco' ? 'ECO' : type === 'new' ? 'NEW' : 'TAG';
  const tagClass = `tags ${type}`;

  return (
    <span className={tagClass}>{tagText}</span>
  );
}

// Validación de prop-types
Tag.propTypes = {
  type: PropTypes.func.isRequired,
};


export default Tag;
