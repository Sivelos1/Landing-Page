import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer(props) {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (props.currentPage === 'Home') {
      return <Home />;
    }
    if (props.currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (props.currentPage === 'Resume') {
      return <Resume />;
    }
    if (props.currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <main className="main-body">{renderPage()}</main>
    </div>
  );
}