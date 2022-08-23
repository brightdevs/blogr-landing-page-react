import React from 'react';
import Links from '../data/links.data';
import Collapsable from './collapsable';
type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const overlay = (props: Props) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    const nextSibling = target.nextSibling as HTMLDivElement;
    if (nextSibling && nextSibling.style.maxHeight) {
      nextSibling.style.maxHeight = '';
    } else {
      console.log('nextSibling', nextSibling);

      nextSibling.style.maxHeight = '100%';
    }
  };
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
