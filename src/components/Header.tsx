import React from "react";
import Logo from "../assets/img/real_logo.svg";
import Button from "./buttons/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {setShowLoginModal} from "../store/reducers/modal/action-creator";


let auth = true;

const Header:React.FC = (props) =>{

    let dispatch = useDispatch();

    let [burgerOpen,setBurgerOpen] = React.useState<Boolean>(false);

    let toggleBurger = () =>{
        setBurgerOpen((burgerOpen)=>!burgerOpen);
    }

    let openLoginModalHandler = () =>{
        dispatch(setShowLoginModal(true));
    }

    console.log(burgerOpen)

    return <header className="header">
        <div className="container">
            <div className="logo">
                <a href="/"> <img src={Logo} alt="logo"/></a>
            </div>
            <div className={classNames("header__nav", {
                open: burgerOpen
            })}>
                <ul className="nav">
                    <li className="nav__item">
                        <div className="header__mobile-logo logo">
                            <a href="/"> <img src={Logo} alt="logo"/></a>
                        </div>
                    </li>
                    {/*<li className="nav__item"><a href="#">Nav link</a></li>*/}
                    <li className="nav__item nav__item_absolute">

                        {
                            auth ?
                                <Button color={"yellow"} onClick={openLoginModalHandler}>
                                    Learn More
                                </Button>
                                :
                                <Button color={"yellow"} onClick={openLoginModalHandler}>
                                    Learn More
                                </Button>
                        }

                    </li>
                </ul>
            </div>
            <div className={classNames("burger", {open: burgerOpen})}
                 data-menu="2"
                 onClick={toggleBurger}>
                <div className="icon"></div>
            </div>
        </div>
    </header>
}

export default Header;