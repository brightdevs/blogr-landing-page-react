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
    >
      <div className='overlay__content'>
        <div className='overlay__content__collapsable__wrapper'>
          {Links.map((item, index) => (
            <Collapsable key={index} item={item} handleClick={handleClick} />
          ))}
        </div>
        <div className='overlay__content__auth__wrapper'>
          <hr style={{ width: '100%' }} />
          <span className='header__nav__auth-login'>Login</span>
          <span className='header__nav__auth-signup btn btn--alert'>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default overlay;
