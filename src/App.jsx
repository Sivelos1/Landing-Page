import './App.css';
import Header from './components/Header';
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div >
      <Header />
      <div className='main-body'>

        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default App;
