import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <img src={logo} alt="" className="navbar-logo" />
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Kurs haqida</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Kurs o’quv dasturi</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">O’quvchilarning fikri </a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Mentor haqida</a>
                </li>
                <li className="navbar-item">
                    <a href="tel:+998900644499" className="navbar-link">+99890 064 44 99</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar