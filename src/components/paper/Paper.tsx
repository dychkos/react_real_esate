import React from 'react';

type PaperProps = {
    children:React.ReactNode | React.ReactElement
}

const Paper:React.FC<PaperProps> = ({children}) => {
    return (
        <div className="paper">
            {children}
        </div>
    );
};

export default Paper;