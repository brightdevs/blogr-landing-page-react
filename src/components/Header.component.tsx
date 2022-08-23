import React, { FunctionComponent } from 'react';
import Links from '../data/links.data';
import ListItem from '../components/listItem';
import { closeAllOpenDropdowns } from '../components/overlay.component/index';
interface Props {
  isOpen: boolean;
  toggle: () => void;
}
const Header: FunctionComponent<Props> = ({ isOpen, toggle }: Props) => {
  return (
    <header className='header '>
      <nav className='header__nav '>
        <h1 className='header__nav__brand'>Blogr</h1>
        <ul className='header__nav__list'>
          {Links.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
        <div className='header__nav__auth'>
          <span className='header__nav__auth-login'>Login</span>
          <span className='header__nav__auth-signup btn btn--primary'>
            Sign Up
          </span>
        </div>
        <span
          id='burger'
          onClick={() => [toggle(), closeAllOpenDropdowns()]}
          className={`header__nav__mobile-icon ${isOpen ? 'open' : ''}`}
        ></span>
      </nav>
      <div className='header__content '>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build you online brand</p>
        <div className='header__content__links'>
          <button className='btn btn--primary'>Start For Free</button>
          <button className='btn btn--clear'>Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
