import React from "react";
import CardWithImage from "../components/CardWithImage";

const Main = () => {
    return (
        <div className="grid justify-items-center gap-4 gap-y-[56px] grid-cols-4">
            <CardWithImage />
            <CardWithImage />
            <CardWithImage />
            <CardWithImage />

            <CardWithImage />
            <CardWithImage />
            <CardWithImage />
            <CardWithImage />
            <div className="h-auto"></div>
        </div>
    );
};

export default Main;