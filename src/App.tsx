import './App.scss';
import desktopEditorImg from './images/illustration-editor-desktop.svg';
import useToggle from './hooks/useToggle';
import Overlay from './components/overlay.component/overlay';
import Header from './components/Header.component';
function App() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <main className='container'>
      <Header isOpen={isOpen} toggle={toggle} />
      <div className='intro-title '>
        <h1>Designed for the future</h1>
      </div>
      <div className='intro-content '>
        <h2>Introducing and extensible editor</h2>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h2>Robust content management</h2>
        <p>
          {' '}
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
      <div className='intro-img'>
        <img src={desktopEditorImg} alt='desktop ilustrator' />
      </div>

      <Overlay isOpen={isOpen} toggle={toggle} />
    </main>
  );
}

export default App;
