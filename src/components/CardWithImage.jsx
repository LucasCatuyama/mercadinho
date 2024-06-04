import React from 'react';


export default function CardWithImage({ product }) {
    
    

    return (
        <div className="flex flex-col items-start gap-3 h-auto p-4 bg-card-bg-beige border-2 rounded-2xl border-dark-green text-text-green">
            <img src={product.imageUrl} alt={product.name} className="w-full" />
            <h1 className="text-xl font-bold leading-7">{product.name}</h1>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            <p className="flex-grow">{product.description}</p>
            <button className="w-full px-3 py-4 bg-dark-green rounded-lg text-center text-base font-bold text-white mt-auto">
                Add
            </button>
        </div>
    );
};


