import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../sidenav/index.css'
export default class Sidenav extends Component {
    render() {
        return (
            
            <ul className="pl-0 m-0 list-unstyled navlist">
                <li>
                    <a>
                        <i className="bi bi-columns-gap me-3"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <Link to='/'>
                        <i className="bi bi-chat-left-text me-3"></i>
                        <span>Chats</span>
                    </Link>
                </li>
                <li>
                    <Link to='/reservation'>
                        <i className="bi bi-card-checklist me-3"></i>
                        <span>Reesrvation</span>
                    </Link>
                </li>
                <li>
                    <a>
                        <i className="bi bi-sd-card me-3"></i>
                        <span>Contacts</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="bi bi-diagram-3 me-3"></i>
                        <span>Channels</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="bi bi-file-text me-3"></i>
                        <span>Templates</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="bi bi-bar-chart-line me-3"></i>
                        <span>Statistics</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="bi bi-gear me-3"></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        
        )
    }
}
