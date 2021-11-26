import React from "react";
import GoodHandsImage from "../assets/img/good_hands.png";
import Button from "./buttons/Button";
import classNames from "classnames";

type PromotionProps = {
    invert?:boolean
}

const Promotion:React.FC<PromotionProps> = ({invert}) =>{
    return (
        <section className={classNames("promotion",{promotion_invert:invert})}>
            <div className="promotion__image">
                <img src={GoodHandsImage} alt="Good Hands"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="promotion__body">
                            <div className="promotion__title marked-title">
                                <div className="mark"></div>
                                <h2>
                                    You`re in good hands
                                </h2>
                            </div>
                            <h5 className="promotion__text">
                                Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se
                                repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque
                                aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium
                                doloremque.
                            </h5>
                            <Button color={"black"}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion;