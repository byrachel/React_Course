import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">MyFirstApp</a>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/todo" className="nav-link">To-do List</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/contact" className="nav-link">Contacts</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/addcontact" className="nav-link">Ajout Contact</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/hook" className="nav-link">Hook</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;