import React from "react";
import HouseBackground from "../assets/img/house_bg.png";
import ArrowYellow from "../assets/img/arrow.svg";

const Banner:React.FC = (props) =>{
    return(
        <section className="banner">
            <div className="banner__gradient">
            </div>
            <div className="banner__bg-image">
                <img src={HouseBackground} alt="Background"/>
            </div>
            <div className="banner__body">
                <div className="container">
                    <h1 className="banner__title large-title">
                        Beautiful homes made for you
                    </h1>
                    <h5 className="banner__text">
                        In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et
                        quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
                    </h5>
                    <div className="banner__footer">
                        <div className="text-arrow">
                            <h6 className="text-arrow__item">See all insights</h6>
                            <img src={ArrowYellow} alt="Arrow Next"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;