import  { useState } from "react";
const BackgroundSwiper = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="max-w-[1870px] mx-auto">
            <div className="relative w-full h-screen overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-none w-full h-full bg-no-repeat bg-contain relative"
                            style={{
                                backgroundImage: `url(${slide})`,
                            }}
                        >
                            {/* Bottom white gradient overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E3E6E6] via-[#E3E6E6] to-transparent"></div>
                        </div>
                    ))}
                </div>
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
            </div>
        </div>

    );
};

export default BackgroundSwiper;
