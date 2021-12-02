import React from 'react';
import  { ReactComponent as LoaderSvg }  from "../assets/img/Loader.svg"

type LoaderProps = {
    fullSize?:boolean
}

const Loader:React.FC<LoaderProps> = ({fullSize}) => {

    let fullWidthStyle ={
        position:"absolute" as "absolute",
        display:"flex",
        zIndex:999,
        top:0,
        left:0,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100vh",
        backgroundColor:"#fff"
    }

    return (
        <div style={fullSize ? fullWidthStyle :{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            height:"100%",
        }}>
            <LoaderSvg/>
        </div>
    );
};

export default Loader;