import React from "react";

const DropdownGroup :React.FC=({children})=>{
    return(
        <div className="listings__dropdown-group dropdown-group">
            <div className="row row-cols-md-4">
                {children}
            </div>
        </div>
    )
}

export default DropdownGroup;