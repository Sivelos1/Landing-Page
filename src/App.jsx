import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx';

function App() {
  
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div >
      <Header handlePageChange = {handlePageChange}/>
      <div>
        <Container currentPage = {currentPage}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
