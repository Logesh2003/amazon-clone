import React, { useState } from "react";
import card1 from './assets/card1.jpg'
import card2 from './assets/card2.jpg'
import card3 from './assets/card3.jpg'
import card4 from './assets/card4.jpg'
const BackgroundSwiper = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-none w-full h-full bg-center bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage: `url(${slide})`,
                        }}
                    >
                        {/* Bottom Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/6 left-5 text-white text-7xl p-2"
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/6 right-5 text-white text-7xl p-2"
            >
                ❯
            </button>
            {/* Discount Cards */}
            <div className="absolute top-90 flex w-full justify-center">
                <div className="bg-white p-5 max-w-md me-5">
                    <h1 className="text-[21px] font-bold mb-5">Revamp your home in style</h1>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img src={card1} alt="Cushion covers" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Cushion covers, bedsheets & more</p>
                        </div>

                        <div>
                            <img src={card2} alt="Figurines" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Figurines, vases & more</p>
                        </div>

                        <div>
                            <img src={card3} alt="Home storage" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Home storage</p>
                        </div>

                        <div>
                            <img src={card4} alt="Lighting" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Lighting solutions</p>
                        </div>
                    </div>

                    <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
                </div>
                <div className="bg-white p-5 max-w-md me-5">
                    <h1 className="text-[21px] font-bold mb-5">Revamp your home in style</h1>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img src={card1} alt="Cushion covers" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Cushion covers, bedsheets & more</p>
                        </div>

                        <div>
                            <img src={card2} alt="Figurines" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Figurines, vases & more</p>
                        </div>

                        <div>
                            <img src={card3} alt="Home storage" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Home storage</p>
                        </div>

                        <div>
                            <img src={card4} alt="Lighting" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Lighting solutions</p>
                        </div>
                    </div>

                    <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
                </div>
                <div className="bg-white p-5 max-w-md me-5">
                    <h1 className="text-[21px] font-bold mb-5">Revamp your home in style</h1>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img src={card1} alt="Cushion covers" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Cushion covers, bedsheets & more</p>
                        </div>
                        <div>
                            <img src={card2} alt="Figurines" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Figurines, vases & more</p>
                        </div>
                        <div>
                            <img src={card3} alt="Home storage" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Home storage</p>
                        </div>
                        <div>
                            <img src={card4} alt="Lighting" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Lighting solutions</p>
                        </div>
                    </div>
                    <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
                </div>
                <div className="bg-white p-5 max-w-md">
                    <h1 className="text-[21px] font-bold mb-5">Revamp your home in style</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img src={card1} alt="Cushion covers" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Cushion covers, bedsheets & more</p>
                        </div>
                        <div>
                            <img src={card2} alt="Figurines" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Figurines, vases & more</p>
                        </div>
                        <div>
                            <img src={card3} alt="Home storage" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Home storage</p>
                        </div>
                        <div>
                            <img src={card4} alt="Lighting" className="w-full h-auto mb-2" />
                            <p className="text-base font-medium">Lighting solutions</p>
                        </div>
                    </div>
                    <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
                </div>
            </div>
        </div>
    );
};

export default BackgroundSwiper;
