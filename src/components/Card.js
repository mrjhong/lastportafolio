import React from 'react';
import '../styles/card.css';

const Card = (props) => {
    const { proyect } = props;

    return (
        <div className="card">
            <div className="image-container">
                <img src={proyect.image} alt={proyect.name} />
            </div>
            <p className="heading">{proyect.name}</p>
            <p>{proyect.description}</p>
        </div>
    );
};

export default Card;
