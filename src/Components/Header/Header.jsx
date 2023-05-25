import React from 'react'
import headerLogo from "../../assets/img/FOX.svg"
import { Link } from 'react-router-dom'
import "./Header.css"
import heroIcon1 from "../../assets/img/headerInstaIcon.svg"
import heroIcon2 from "../../assets/img/headerFaceIcon.svg"
import heroIcon3 from "../../assets/img/headerInIcon.svg"
import heroIcon4 from "../../assets/img/headerBallIcon.svg"
import humburgerBtn from "../../assets/img/humburgerBtn.png"

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
                <button className='nav-hamburger'><img src={humburgerBtn} alt="" /></button>
            </nav>

            <div className='hero-head-wrap'>
                <div className='hero-wrap'>
                    <h3 className='hero-name'>Hello, <span className='hero-name-span'>I’m</span></h3>
                    <div className='hero-title-wrapper'>
                        <h1 className='hero-title'>robert fox</h1>
                        <span className='hero-title-span'></span>
                    </div>
                    <p className='hero-text'>Professional Product Designer</p>
                    <button className='hero-btn'>let’s talk</button>
                </div>
                <div className='hero-icon-wrap'>
                    <div className='header-icon'><img src={heroIcon1} alt="" /></div>
                    <div className='header-icon'><img src={heroIcon2} alt="" /></div>
                    <div className='header-icon'><img src={heroIcon3} alt="" /></div>
                    <div className='header-icon'><img src={heroIcon4} alt="" /></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header