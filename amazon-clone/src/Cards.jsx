import React from "react";
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import card4 from './assets/card4.jpg';

const cardData = [
    { img: card1, title: "Cushion covers, bedsheets & more" },
    { img: card2, title: "Figurines, vases & more" },
    { img: card3, title: "Home storage" },
    { img: card4, title: "Lighting solutions" },
];

const DiscountCards = ({ numberOfGroups = 4, top = "top-80" }) => {
    return (
        <div className={`absolute ${top} left-0 w-full flex justify-center gap-5 z-20 px-5`}>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
                {Array(numberOfGroups).fill(0).map((_, groupIdx) => (
                    <div key={groupIdx} className="bg-white p-5 w-110">
                        <h1 className="text-[21px] font-bold mb-5">Revamp your home in style</h1>
                        <div className="grid grid-cols-2 gap-4">
                            {cardData.map((card, index) => (
                                <div key={index}>
                                    <img src={card.img} alt={card.title} className="w-full h-auto mb-2" />
                                    <p className="text-base font-medium">{card.title}</p>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="text-blue-600 mt-4 inline-block">Explore all</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountCards;
