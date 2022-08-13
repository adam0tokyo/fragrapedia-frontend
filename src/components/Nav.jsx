import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <span className="logo">FRAGRAPEDIA</span>
        <ul className="nav-links">
            {/* <li>
                <Link to="/">Home</Link>
            </li> */}
            <li>
                <Link to="/fragrances">Fragrances</Link>
            </li>
            <li>
                <Link to="/add_fragrance">Add Fragrance</Link>
            </li>
            {/* <li>
                <Link to="/edit_fragrance">Edit Fragrance</Link>
            </li> */}
            {/* <li>
                <Link to="/Users">Users</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default Navigation