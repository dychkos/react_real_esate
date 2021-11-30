import React from 'react';
import {API_IMAGE_URL} from "../config";
import Button from "./buttons/Button";
import Card from "./card/Card";
import CardTitle from "./card/CardTitle";
import CardFooter from "./card/CardFooter";
import {IUser} from "../models/IUser";

type UserSidebarProps = {
    user:IUser
}

const UserSidebar:React.FC<UserSidebarProps> = ({user}) => {
    return (
        <Card>
            <CardTitle>
                <div className="author">
                    {user.image &&
                    <div className="author__icon">
                        <img src={API_IMAGE_URL + user.image.filename}
                             width="50px" height="50px"
                             alt="User Icon"/>
                    </div>
                    }
                    <div className="author__info">
                        <div className="author__name author__name-thin">
                            <span>{user.name}</span>
                            <br/>
                            <span className="link">Change profile info</span>
                        </div>
                    </div>
                </div>
            </CardTitle>
            <CardFooter >
                <Button color={"yellow"} center={true}>My orders</Button>
            </CardFooter>
        </Card>

    );
};

export default UserSidebar;