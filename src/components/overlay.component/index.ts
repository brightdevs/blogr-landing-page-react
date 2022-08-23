export const handleClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const targetElement = event.target as HTMLButtonElement;
  const nextSibling = targetElement.nextSibling as HTMLDivElement;
  const collapsableElements = document.querySelectorAll(
    '.overlay__content__collapsable__btn'
  );

  for (let i = 0; i < collapsableElements.length; i++) {
    if (collapsableElements[i] !== targetElement) {
      const nextSibling = collapsableElements[i].nextSibling as HTMLDivElement;
      nextSibling.style.maxHeight = '';
    } else {
      if (nextSibling && nextSibling.style.maxHeight) {
        nextSibling.style.maxHeight = '';
        targetElement.classList.remove('open');
      } else {
        setTimeout(() => {
          targetElement.classList.add('open');
          nextSibling.style.maxHeight = '100%';
        }, 500);
      }
    }
  }
};

export const closeAllOpenDropdowns = () => {
  const collapsableElements = document.querySelectorAll(
    '.overlay__content__collapsable__btn'
  );

  for (let i = 0; i < collapsableElements.length; i++) {
    const nextSibling = collapsableElements[i].nextSibling as HTMLDivElement;
    nextSibling.style.maxHeight = '';
    collapsableElements[i].classList.remove('open');
  }
};
