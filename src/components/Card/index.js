import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ title, tag, src, alt }) => {
    return (
        <article className="layout-card card">
            <img className="card_img"
                src={src}
                alt={alt}
            />
            <footer className="l-flex card_footer">
                <h2 className="l-flex card_title">{title}</h2>
                <p className="l-flex card_tag">{tag}</p>
            </footer>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};

export default Card;