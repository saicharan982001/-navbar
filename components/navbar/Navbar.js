import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';




export const Navbar = () => {
     const[menuOpen, setMenuOpen] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
     const dropdownRef = useRef(null);


     const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
   


  return (
    <nav>
        <div className="full-screen-background"></div>
        <h3 className='title'>Project A</h3>
        <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ''}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className={`search-bar ${menuOpen ? 'open' : ''}`}>
            <input  type="text" placeholder="Search..." />
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        <div className="user-menu" ref={dropdownRef}>
    <button className= 'user-icon-button' onClick={toggleDropdown}>
       <FontAwesomeIcon icon={faUserCircle} />
   </button>
   {isOpen && (
   <div className="dropdown-menu">
    <ul id='dropdown-item'>
     <li><a href="/profile" /*className="dropdown-item"*/>Profile</a></li>
     <li><a href="/settings" /*className="dropdown-item"*/>Settings</a></li>
    <li> <a href="/logout" /*className="dropdown-item"*/>Logout</a></li>
     </ul>
    </div>
    )}
    </div>
    </nav>
  );
}


export default Navbar
