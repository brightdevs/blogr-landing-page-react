import React from 'react';
import ListItem from './components/listItem';
import './App.scss';
import Links from './data/links.data';
import useToggle from './hooks/useToggle';
import Overlay from './components/overlay';
function App() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <main className='container'>
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
            onClick={() => toggle()}
            className={`header__nav__mobile-icon ${isOpen ? 'open' : ''}`}
          ></span>
        </nav>
      </header>
      <Overlay isOpen={isOpen} toggle={toggle} />
    </main>
  );
}

export default App;
