import React from 'react';

const CardTitle:React.FC = ({children}) => {
    return (
        <div className="card__title">
            <h4>{children}</h4>
        </div>
    );
};

export default CardTitle;