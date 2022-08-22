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
            {[
              {
                title: 'Product',
                dropdown: [
                  { title: 'Demo', hrefUrl: '/' },
                  { title: 'Reviews', hrefUrl: '/' },
                  { title: 'News', hrefUrl: '/' },
                ],
              },
              {
                title: 'Company',
                dropdown: [
                  { title: 'Location', hrefUrl: '/' },
                  { title: 'About', hrefUrl: '/' },
                  { title: 'Links', hrefUrl: '/' },
                ],
              },
              {
                title: 'Connect',
                dropdown: [
                  { title: 'Contact', hrefUrl: '/' },
                  { title: 'Newsletter', hrefUrl: '/' },
                  { title: 'LinkedIn', hrefUrl: '/' },
                ],
              },
            ].map((item, index) => (
              <ListItem key={index} item={item} />
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
