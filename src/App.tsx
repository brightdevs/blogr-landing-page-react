import React from 'react';
import ListItem from './components/listItem';
import './App.scss';

function App() {
  return (
    <main className='container'>
      <header className='header '>
        <nav className='header__nav '>
          <h1 className='header__nav__brand'>Blogr</h1>
          <ul className='header__nav__list'>
            {['Product', 'Company', 'Contact'].map((itemName, index) => (
              <ListItem key={index} itemName={itemName} hrefUrl={'/'} />
            ))}
          </ul>
          <div className='header__nav__auth'>
            <span className='header__nav__auth-login'>Login</span>
            <span className='header__nav__auth-signup btn btn--primary'>
              Sign Up
            </span>
          </div>
        </nav>
      </header>
    </main>
  );
}

export default App;
