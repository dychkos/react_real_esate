import React from 'react';

type PaperBodyProps = {
    children:React.ReactNode | React.ReactElement
}

const PaperBody:React.FC<PaperBodyProps> = ({children}) => {
    return (
        <div className="paper__body">
            {children}
        </div>
    );
};

export default PaperBody;