import React from "react";
import Button from "./buttons/Button";
import {IUser} from "../models/IUser";
import {API_IMAGE_URL} from "../config";
import InputItem from "./InputItem";
import DefaultUserIcon from "../assets/img/default_user.png";
import {useForm} from "../hooks/useForm";
import {AddOrderRequest} from "../api/types";
import Loader from "./Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";


type HouseOrderProps = {
    user:IUser,
    onSubmit:(order:AddOrderRequest)=>void
}

const HouseOrder:React.FC<HouseOrderProps> = ({user,onSubmit}) =>{

    let {error,isLoading} = useTypedSelector(state => state.ordersReducer);

    const { handleSubmit, handleChange, data: order, errors } = useForm<AddOrderRequest>({
        validations: {
            customer_name: {
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The name needs to be at least 3 characters long.',
                },
            },
            customer_phone: {
                custom:{
                    isValid: (value) => value.length > 6,
                    message: 'The phone is not correct',
                }
            },
            customer_email: {
                pattern: {
                    value: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
                    message:
                        "Your email is invalid",
                },
            },
            customer_message:{
                custom:{
                    isValid: (value) => value.length > 6,
                    message: 'The message needs to be at least 6 characters long.',
                }
            }
        },
        onSubmit: (e) => onSubmit(order)
    });

    let phoneMaskHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        if (x) {
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    }


    return(
        <form className="house__order" onSubmit={handleSubmit}>
                {isLoading
                    ?
                    <Loader/>
                    : <div>
                        {error && <div className="validation-fail">{error}</div> }
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
                            <InputItem fieldName={"customer_name"} labelText={"Name"} placeholder="Ivan Ivanov" onChange={handleChange("customer_name")} error={errors.customer_name} required={true} />
                        </div>
                        <div className="house__order-field">
                            <InputItem fieldName={"customer_email"} labelText={"Email"} placeholder="example@mail.com" onChange={handleChange("customer_email")} error={errors.customer_email} type={"email"} required={true}/>
                        </div>
                        <div className="house__order-field">
                            <InputItem fieldName={"customer_phone"} labelText={"Phone"} placeholder="(000) 000-0000" onInput={phoneMaskHandler} onChange={handleChange("customer_phone")} error={errors.customer_phone} required={true}/>
                        </div>
                        <div className="house__order-field">
                            {errors.customer_message && <div className="validation-fail">{errors.customer_message}</div>}
                            <textarea onChange={handleChange("customer_message")} required={true} placeholder="Hello, I am interested in…"/>
                        </div>
                        <div className="houser__order-field">
                            <Button color={"black"} fullWidth={true}>
                                Left order
                            </Button>
                        </div>
                </div>
                }
        </form>
    )
}

export default HouseOrder;