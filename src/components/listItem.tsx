import React from 'react';

type Props = {
  itemName: string;
  hrefUrl: string;
};

const listItem = ({ itemName, hrefUrl = '/' }: Props) => {
  return (
    <>
      <li className='header__nav__list__item'>
        <a href={hrefUrl} className='header__nav__list__item__link'>
          {itemName}
        </a>
      </li>
    </>
  );
};

export default listItem;
