import React from 'react';

type Props = {
  item: {
    title: string;
    dropdown: {
      title: string;
      hrefUrl: string;
    }[];
  };
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Collapsable = ({ item, handleClick }: Props) => {
  return (
    <div className='overlay__content__collapsable'>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClick(event);
        }}
        className='btn--unstyled overlay__content__collapsable__btn'
      >
        {item.title}
      </button>
      <div className='overlay__content__collapsable__links'>
        {item.dropdown.map((item, index) => (
          <a key={index} href={item.hrefUrl}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Collapsable;
