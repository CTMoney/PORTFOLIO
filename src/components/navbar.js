import React from 'react'
import 'bootstrap'
import '../index.css'
import logo from '../images/catIcoWhite.svg'
import linkedIn from '../../src/images/linkedin.png'
import github from '../../src/images/github.png'
import BrowserRouter, { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark' id='BG'>
      <b className='navbar-brand'>
        <img
          src={logo}
          alt=''
          width='65'
          height='65'
          className='d-inline-block align-top'
          title='Hi there.'
        />
      </b>
      <span className='navbar-brand mb-0 h1'>Portfolio</span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <p>
              <Link className='nav-link' style={{ fontSize: 23 }} to='/'>Home</Link>
            </p>
          </li>
          <li className='nav-item'>
            <p          >
              <Link className='nav-link' style={{ fontSize: 23 }} to='/about'>About</Link>
            </p>
          </li>
          <li className='nav-item'>
            <p>
              <Link className='nav-link' style={{ fontSize: 23 }} to='/contact'>Contact</Link>
            </p>
          </li>
        </ul>
        <a
          className='nav-item nav-link ml-0'
          width='50'
          height='50'
          href='https://github.com/CTMoney?tab=repositories'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img width='50' height='50' src={github} title='github' />
        </a>
        <a
          className='nav-item nav-link'
          href='https://www.linkedin.com/in/ctmoney/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img width='50' height='50' src={linkedIn} title='linkedIn' />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
