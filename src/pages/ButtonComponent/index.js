import React from 'react';
import './styles.css';

import Button from '../../components/Button';

const Colors = [ 'default', 'primary', 'secondary', 'danger' ];

const ButtonComponentPage = () => {
    return (
        <main className="layout-main main">
            <header className="header">
                <h1 className="header_title">Button Component Project</h1>
            </header>

            <section className="main_section">
                <h2 className="section_title">Default Buttons</h2>

                <h3 className="section_list_title">Small Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='default' color={color} size='sm' /></li>)}
                </ul>

                <h3 className="section_list_title">Medium Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='default' color={color} size='md' /></li>)}
                </ul>

                <h3 className="section_list_title">Large Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='default' color={color} size='lg' /></li>)}
                </ul>
            </section>

            <section className="main_section">
                <h2 className="section_title">Outline Buttons</h2>

                <h3 className="section_list_title">Small Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='outline' color={color} size='sm' /></li>)}
                </ul>

                <h3 className="section_list_title">Medium Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='outline' color={color} size='md' /></li>)}
                </ul>

                <h3 className="section_list_title">Large Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='outline' color={color} size='lg' /></li>)}
                </ul>
            </section>

            <section className="main_section">
                <h2 className="section_title">Text Buttons</h2>

                <h3 className="section_list_title">Small Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='text' color={color} size='sm' /></li>)}
                </ul>

                <h3 className="section_list_title">Medium Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='text' color={color} size='md' /></li>)}
                </ul>

                <h3 className="section_list_title">Large Size</h3>
                <ul className="section_list">
                    {Colors.map((color, index) => <li key={index}><Button value='Button' variant='text' color={color} size='lg' /></li>)}
                </ul>
            </section>
        </main>
    );
};

export default ButtonComponentPage;