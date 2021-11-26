import React from 'react';

type PaperTitleProps = {
    children:React.ReactNode | React.ReactElement
}

const PaperTitle:React.FC<PaperTitleProps> = ({children}) => {
    return (
        <div className="paper__title">
            <h4>{children}</h4>
        </div>
    );
};

export default PaperTitle;