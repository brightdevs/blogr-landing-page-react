import React from 'react';

type Props = {
  item: {
    title: string;
    dropdown: {
      title: string;
      hrefUrl: string;
    }[];
  };
};

const listItem = ({ item }: Props) => {
  return (
    <>
      <li className='header__nav__list__item'>
        <div className='dropdown'>
          <button className='dropbtn btn--unstyled'>
            {item.title}
            <i className='fa fa-caret-down' />
          </button>
          <div className='dropdown-content'>
            {item.dropdown.map((item, index) => (
              <a key={index} href={item.hrefUrl}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default listItem;
