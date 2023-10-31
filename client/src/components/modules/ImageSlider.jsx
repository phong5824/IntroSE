import { useRef } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="w-full h-[500px] relative">
                        <img src={img.src} alt="Slide" className="w-full h-full object-contain" />
                    </div>
                ))}
            </Slider>
            <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md focus:outline-none">
                ←
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md focus:outline-none">
                →
            </button>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired
    })).isRequired
};

export default ImageSlider;
