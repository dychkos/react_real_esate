import React from "react";
import Logo from "../assets/img/real_logo.svg";
import Button from "./buttons/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {setShowAddCommentModal, setShowLoginModal} from "../store/reducers/modal/action-creator";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {UserActionCreators} from "../store/reducers/user/action-creator";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";

const Header:React.FC = () =>{

    const auth = useTypedSelector(state => state.userReducer.isAuth);
    let dispatch = useDispatch();
    let router = useHistory();

    let [burgerOpen,setBurgerOpen] = React.useState<Boolean>(false);

    let toggleBurger = () =>{
        setBurgerOpen((burgerOpen)=>!burgerOpen);
    }

    let openLoginModalHandler = () =>{
        dispatch(setShowLoginModal(true));
    }

    let openAddCommentModalHandler = () =>{
        dispatch(setShowAddCommentModal(true));
    }

    let logout = () =>{
        dispatch(UserActionCreators.logout());
    }

    return <header className="header">
        <div className="container">
            <div className="logo">
                <NavLink to={RouteNames.HOME}> <img src={Logo} alt="logo"/></NavLink>
            </div>
            <div className={classNames("header__nav", {
                open: burgerOpen
            })}>
                <ul className="nav">
                    <li className="nav__item">
                        <div className="header__mobile-logo logo">
                            <NavLink to={RouteNames.HOME}> <img src={Logo} alt="logo"/></NavLink>
                        </div>
                    </li>
                    <li className="nav__item" onClick={openAddCommentModalHandler}>Leave feedback</li>
                    {auth && (
                        <>
                            <li className="nav__item">
                                <NavLink to={RouteNames.USER_PROFILE}>Orders</NavLink>
                            </li>
                            <li onClick={logout} className="nav__item">Logout</li>
                        </>
                    ) }
                    <li className="nav__item nav__item_absolute">
                        {
                            auth ?
                                <Button color={"yellow"} onClick={()=>router.push(RouteNames.USER_PROFILE)}>
                                    Profile
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
                <div className="icon"/>
            </div>
        </div>
    </header>
}

export default Header;