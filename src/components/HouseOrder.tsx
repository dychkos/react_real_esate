import React from "react";
import Button from "./buttons/Button";
import {IUser} from "../models/IUser";
import {API_IMAGE_URL} from "../config";
import InputItem from "./InputItem";
import DefaultUserIcon from "../assets/img/default_user.png";

type HouseOrderProps = {
    user:IUser,
    onSubmit:()=>void
}

const HouseOrder:React.FC<HouseOrderProps> = ({user,onSubmit}) =>{
    return(
        <form className="house__order" onSubmit={onSubmit}>
            <div className="house__order-author author">
                <div className="author__icon">
                  <img src={user.image ? API_IMAGE_URL+user.image.filename : DefaultUserIcon } alt="User Icon"/>
                </div>
                <div className="author__info">
                    <div className="author__name author__name-thin">
                        <span>{user.name}</span>
                    </div>                   
                </div>
            </div>
            <div className="house__order-field">
                <InputItem fieldName={"customer_name"} labelText={"Name"} required={true} />
            </div>
            <div className="house__order-field">
                <InputItem fieldName={"customer_email"} labelText={"Email"} type={"email"} required={true}/>
            </div>
            <div className="house__order-field">
                <InputItem fieldName={"customer_phone"} labelText={"Phone"} required={true}/>
            </div>
            <div className="house__order-field">
                <textarea required={true} placeholder="Hello, I am interested in…"/>
            </div>
            <div className="houser__order-field">
                <Button color={"black"} fullWidth={true}>
                    Left order
                </Button>
            </div>
        </form>
    )
}

export default HouseOrder;