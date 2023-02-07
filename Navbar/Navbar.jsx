import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <Link to='/index' className='navbar-brand'>React contact App</Link>
        <div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                <Link to='/contact' className='nav-link'> contact</Link>        
                </li>
                
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar