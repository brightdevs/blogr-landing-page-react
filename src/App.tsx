import './App.scss';
import desktopEditorImg from './images/illustration-editor-desktop.svg';
import phonesImg from './images/illustration-phones.svg';
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
      <section className='intro-content '>
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
      </section>
      <figure className='intro-img'>
        <img src={desktopEditorImg} alt='desktop ilustrator' />
      </figure>
      <section className='infrastructure-section'>
        <div className='infrastructure-section__wrapper'>
          <figure className='infrastructure-section__wrapper__img'>
            <img src={phonesImg} alt='blogger phones' />
          </figure>
          <div className='infrastructure-section__wrapper__content'>
            <div>
              <h1>State of the Art Infrastructure </h1>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Overlay isOpen={isOpen} toggle={toggle} />
    </main>
  );
}

export default App;
