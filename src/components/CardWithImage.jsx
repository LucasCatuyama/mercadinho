import * as React from "react";
import breadImage from '../images/bread.jpg';

const CardWithImage = () => {
  return (
    <div className="flex flex-col items-start gap-3 w-[283px] h-auto p-4 bg-card-bg-beige border-2 rounded-2xl border-dark-green text-text-green">
      <img src={breadImage} alt="" />
      <h1 className="text-xl/normal font-bold leading-7">Product name</h1>
      <p>Price</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Possimus placeat aut earum eum est in corporis laudantium iste laborum
        mollitia.
      </p>
      <button className="w-full px-3 py-4 bg-dark-green rounded-lg text-center text-base/normal font-bold text-white">Add</button>
    </div>
  );
};

export default CardWithImage;
