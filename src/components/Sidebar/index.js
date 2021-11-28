import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Icon from '@mui/material/Icon';

const Sidebar = () => {
    return (
        <aside className="layout-sidebar sidebar">
            <h1 className="l-flex sidebar_header">CBStanley</h1>

            <nav className="l-flex sidebar_nav">
                <Link to="/" className="nav_link">
                    <Icon baseClassName="material-icons-outlined">home</Icon>
                    Home
                </Link>
                <Link to="/projects" className="nav_link">
                    <Icon baseClassName="material-icons-outlined">wysiwyg</Icon>
                    Projects
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;