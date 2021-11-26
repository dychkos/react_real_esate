import React from 'react';

const CardFooter:React.FC = ({children}) => {
    return (
        <div className="card__footer">
            <div className="row">
                {children}
            </div>
        </div>
    );
};

export default CardFooter;