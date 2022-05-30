import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Messages from './components/Messages';

function App() {
  return (
    <div className="content-wrapper">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <About />
            <Contact />
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
