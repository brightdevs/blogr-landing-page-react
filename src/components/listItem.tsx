import { FunctionComponent } from 'react';

type Props = {
  item: {
    title: string;
    dropdown: {
      title: string;
      hrefUrl: string;
    }[];
  };
};

const listItem: FunctionComponent<Props> = ({ item }: Props) => {
  return (
    <>
      <li className='unstyled'>
        <div className='dropdown'>
          <button className='btn--unstyled'>
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
