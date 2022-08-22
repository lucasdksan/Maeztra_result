import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { arryPartnerBanner, objArrows } from "../data/mainBanner";

import * as Component from "../styles/components/MainBanner";

const MainBanner = ()=> {
    function NextArrow(props:CustomArrowProps){
        const { className, onClick } = props;

        return(
            <div
                className={className}
                onClick={onClick}
            >
                <img src={objArrows.next} alt="Next Button" />
            </div>
        );
    }

    function PrevArrow(props:CustomArrowProps){
        const { className, onClick } = props;

        return(
            <div
                className={className}
                onClick={onClick}
            >
                <img src={objArrows.prev} alt="Prev Button" />
            </div>
        );
    }


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return(
        <Component.Container>
            <Slider
                className="container"
                {...settings}
            >
                {
                    arryPartnerBanner.map((e, k)=>{
                        return(
                            <img 
                                src={e.path}
                                key={k}
                                title={e.title}
                                alt={e.title}
                            />
                        );
                    })
                }
            </Slider>
        </Component.Container>
    );
}

export default MainBanner;