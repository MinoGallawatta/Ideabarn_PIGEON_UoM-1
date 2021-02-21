import React, { useState } from "react";
import "./HomeCarousel.scss"
import Carousel from "react-bootstrap/Carousel";

const data = [
    {
        image: require("../../../assets/images/1.jpg"),

    },
    {
        image: require("../../../assets/images/3.jpg"),

    },
    {
        image: require("../../../assets/images/4.jpg"),

    },
    {
        image: require("../../../assets/images/5.jpg"),

    },

];

export default function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="home-carousel-container ">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={5000}
                pause={false}
            >
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={String(slide.image)}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}


