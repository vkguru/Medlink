import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/img/Logo.png';

const Nav = () => {

  const [menuactive, setMenuactive] = useState(false);

  return (
    <>
      <nav className="nav">

        <div className="navbar">

          <div className="logo">

            <Link to="/">
              <img src={logo} alt="medlink logo" />
            </Link>

          </div>

          <div className="menu" id={menuactive === true ? 'dl' : 'dn' }>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/history">Search History</Link></li>

            </ul>

          </div>

          <div className="mobile-menu">

            <div className="icon" onClick={() => setMenuactive(!menuactive)}>

              <i className="fa fa-bars" aria-hidden="true"></i>

            </div>

          </div>

        </div>

      </nav>

    </>
  )
}

export default Nav;