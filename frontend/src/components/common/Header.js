import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Digital Learning Platform</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/assignments">Assignments</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <div className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </header>
    );
};

export default Header;