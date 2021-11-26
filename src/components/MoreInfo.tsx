import React from 'react';
import Button from "./buttons/Button";

const MoreInfo:React.FC = () => {
    return (
        <section className="more-info">
            <div className="more-info__body">
                <div className="more-info__title marked-title ">
                    <div className="mark mark_center"></div>
                    <h2>
                        You`re in good hands
                    </h2>
                </div>
                <h5 className="more-info__text">
                    Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere,
                    idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi
                    involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
                </h5>
                <Button color={"yellow"}>
                    Learn more
                </Button>
            </div>
        </section>
    );
};

export default MoreInfo;