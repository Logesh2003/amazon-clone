import React, { useRef } from "react";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";
import banner5 from "./assets/banner5.jpg";
import banner6 from "./assets/banner6.jpg";
import banner7 from "./assets/banner1.jpg";
import banner8 from "./assets/banner2.jpg";
import banner9 from "./assets/banner3.jpg";
import banner10 from "./assets/banner4.jpg";
import banner11 from "./assets/banner5.jpg";
import banner12 from "./assets/banner6.jpg";

function ImageGallerySwiper() {
    const slides = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
        banner6,
        banner7,
        banner8,
        banner9,
        banner10,
        banner11,
        banner12,
    ];

    const scrollRef = useRef(null);

    // Drag/swipe functionality
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const startDrag = (e) => {
        isDragging.current = true;
        scrollRef.current.classList.add("cursor-grabbing");
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const stopDrag = () => {
        isDragging.current = false;
        scrollRef.current.classList.remove("cursor-grabbing");
    };

    const onDrag = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Arrow scroll functions
    const scrollNext = () => {
        scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    };

    const scrollPrev = () => {
        scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    };

    return (
        <div className="relative bg-white max-w-[1820px] mx-auto p-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-[21px] font-bold">Related to items you've viewed</h1>
                    <a href="#" className="text-blue-700 text-[18px] ms-5">
                        See more
                    </a>
                </div>
            </div>

            {/* Left Arrow */}
            <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-5xl p-5 bg-white shadow-lg"
            >❮
            </button>

            {/* Swiper container */}
            <div
                ref={scrollRef}
                onMouseDown={startDrag}
                onMouseLeave={stopDrag}
                onMouseUp={stopDrag}
                onMouseMove={onDrag}
                className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth cursor-grab select-none
                   scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                style={{ scrollbarWidth: "thin" }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-none p-12 rounded-xl overflow-hidden"
                    >
                        <img
                            src={slide}
                            alt={`banner-${index + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-5xl p-5 bg-white shadow-lg"
            >❯
            </button>
        </div>
    );
}

export default ImageGallerySwiper;
