import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Arrow from "../assets/img/arrow_down.svg"
import 'swiper/swiper.scss';
import {IComment} from "../models/IComment";
import {API_IMAGE_URL} from "../config";
import DefaultUserIcon from "../assets/img/default_user.png";

SwiperCore.use([Navigation]);

type commentsSwiperProps = {
    comments:IComment[]
}



const CommentsSwiper:React.FC<commentsSwiperProps> = ({comments}) => {
    const prevRef = React.useRef<HTMLDivElement>(null);
    const nextRef = React.useRef<HTMLDivElement>(null);

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={3}
            autoplay={false}
            loop
            onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}

            breakpoints={{
                990: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 1,
                },
            }}
        >
            {comments.map((comment) => {
                return (
                    <SwiperSlide key={comment.id}>
                        <div className="col comment marked-title">
                            <div className="mark mark-full"></div>
                            <h4 className="comment__title">
                                “ {comment.author_message.length > 160 ?
                                `${comment.author_message.substring(0, 160)}...` : comment.author_message
                            }”
                            </h4>
                            <div className="comment__author author">
                                <div className="author__icon">
                                    <img src={comment.image ? API_IMAGE_URL+comment.image.filename : DefaultUserIcon} alt="User Icon"/>
                                </div>
                                <div className="author__info">
                                    <div className="author__name">
                                        <span>{comment.author_name}</span>
                                    </div>
                                    <div className="author__position">
                                        <span>Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}

            <div  ref={prevRef} className="swiper-button-prev">
                <img src={Arrow} alt="Arrow"/>
            </div>
            <div ref={nextRef} className="swiper-button-next">
                <img src={Arrow} alt="Arrow"/>
            </div>
        </Swiper>
    );
}

export default CommentsSwiper;