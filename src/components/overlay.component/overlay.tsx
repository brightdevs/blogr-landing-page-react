import { FunctionComponent } from 'react';
import Links from '../../data/links.data';
import Collapsable from '../collapsable';
import { handleClick } from './index';
type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const overlay: FunctionComponent<Props> = (props) => {
  return (
    <div
      className={`
        overlay ${props.isOpen ? 'active' : ''}
    `}
      //   onClick={props.toggle}
    >
      <div className='overlay__content'>
        {Links.map((item, index) => (
          <Collapsable key={index} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default overlay;
