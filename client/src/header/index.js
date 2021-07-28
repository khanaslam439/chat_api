import React, { Component } from 'react'
import '../header/index.css'
export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg nav-bg px-2 navbar-dark">
                    <button className="p-0 border-0 fs-large mr-2 bg-transparent text-white">
                        <i className="bi bi-list"></i>
                    </button>
                    <a className="navbar-brand text-white">Re<b>mmsh</b></a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <a className="btn btn-outline-light btn-sm  ">
                                Upgrade Plan
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="bi bi-question-circle"></i>
                                <span></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="bi bi-bell"></i>
                                <span></span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle me-2"></i>Sanaul 
                            </a>
                            <ul className="dropdown-menu mb-0 dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" ><i className="bi bi-person"></i> Personal Setting</a></li>
                                <li><a className="dropdown-item"><i className="bi bi-people"></i> Organisation Setting</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" ><i className="bi bi-box-arrow-left"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}
