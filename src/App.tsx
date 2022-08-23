import './App.scss';

import useToggle from './hooks/useToggle';
import Overlay from './components/overlay.component/overlay';
import Header from './components/Header.component';
function App() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <main className='container'>
      <Header isOpen={isOpen} toggle={toggle} />
      <Overlay isOpen={isOpen} toggle={toggle} />
    </main>
  );
}

export default App;
