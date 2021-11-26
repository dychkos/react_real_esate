import React from 'react';

type CardImageProps = {
    image:string
}

const CardImage:React.FC<CardImageProps> = ({image}) => {
    return (
        <div className="card__image">
            <img src={image} alt="Card Item"/>
        </div>
    );
};

export default CardImage;