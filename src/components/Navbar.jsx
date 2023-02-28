import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        WikiCountries
      </Link>
    </nav>
  );
};
