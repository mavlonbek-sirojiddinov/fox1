import React from 'react'
import headerLogo from "../../assets/img/FOX.svg"
import { Link } from 'react-router-dom'
import "./Header.css"
import heroIcon1 from "../../assets/img/headerInstaIcon.svg"

function Header() {
  return (
    <header>
        <div className="container">
            <nav className='nav-bar'>
                <Link><img src={headerLogo} alt="" /></Link>
                <ul className='nav-bar-list'>
                    <li className='nav-bar-item'>
                        <Link className='nav-bar-link'>Home</Link>
                    </li>
                    <li className='nav-bar-item'>
                        <Link className='nav-bar-link'>about</Link>
                    </li>
                    <li className='nav-bar-item'>
                        <Link className='nav-bar-link'>service</Link>
                    </li>
                    <li className='nav-bar-item'>
                        <Link className='nav-bar-link'>portfolio</Link>
                    </li>
                </ul>
                <button className='nav-bar-btn'>contact</button>
            </nav>

            <div className='hero-head-wrap'>
                <div className='hero-wrap'>
                    <h3 className='hero-name'>Hello, <span className='hero-name-span'>I’m</span></h3>
                    <h1 className='hero-title'>robert fox</h1>
                    <p className='hero-text'>Professional Product Designer</p>
                    <button className='hero-btn'>let’s talk</button>
                </div>
                <div className='hero-icon-wrap'>
                    <div><img src={heroIcon1} alt="" /></div>
                    <div><img src={heroIcon1} alt="" /></div>
                    <div><img src={heroIcon1} alt="" /></div>
                    <div><img src={heroIcon1} alt="" /></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header