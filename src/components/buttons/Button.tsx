import React from "react";
import classNames from "classnames";
import ArrowYellow from "../../assets/img/arrow.svg"
import ArrowWhite from "../../assets/img/arrow_white.svg"

type ButtonProps =  {
    color: "yellow" | "black",
    fullWidth?:boolean,
    center?:boolean,
    children: React.ReactNode

}

const Button : React.FC<ButtonProps  & React.ButtonHTMLAttributes<HTMLButtonElement> >  = ({color,fullWidth,center,children,...props}:ButtonProps) =>{
    return (
        <button className={classNames('btn', `btn-${color}`,{"full-width":fullWidth} )} {...props}>
            <div className="text-arrow" style={{
                justifyContent: center ? 'center' : 'unset'
            }}>
                <span className="text-arrow__item">
                    {children}
                </span>
                <img src={color === "black" ? ArrowYellow : ArrowWhite} alt="Arrow Next"/>
            </div>
        </button>
    )
}

export default Button;