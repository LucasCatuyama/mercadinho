import React from "react";
import CardWithImage from "../components/CardWithImage";

const Main = ({ incrementCount }) => {
  return (
    <div className="">
      <CardWithImage incrementCount={incrementCount} />
      <div className="h-12"></div>
    </div>
  );
};

export default Main;
