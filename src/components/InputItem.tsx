import React from "react";

type InputProps ={
    error?:string
    fieldName:string
    labelText:string
    type?:string
}

const InputItem:React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement> > = ({fieldName,type,labelText,error,...props}) =>{
    let randID = Date.now();
    return(
        <div>
            <label htmlFor={fieldName+randID}>{labelText}</label>
            <input type={type ?? "text"} name={fieldName} id={fieldName+randID} {...props} />
            <div className="validation-fail">{error}</div>
        </div>
    )
}

export default InputItem;