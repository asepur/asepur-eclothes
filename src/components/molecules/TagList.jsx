
import './TagList.css';
import Tag from '../atoms/Tag.jsx';

function TagList() {
  return (
    <div className='info__product--tag'>
        <Tag type={"eco"}/>
        <Tag type={"new"}/>
    </div>
  );
}

export default TagList;
