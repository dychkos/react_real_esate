import React from 'react';

const Card:React.FC = ({children}) => {
    return (
        <div>
            <div className="card">
                {children}
            </div>
        </div>
    );
};

export default Card;