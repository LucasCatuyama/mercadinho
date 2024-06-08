import React, { useState } from "react";
import Header from './header'
import Footer from "./footer";



export default function Layout({children}){
    return (
        <div className="bg-bg-beige">
            <Header />
                {children}
            <Footer />
        </div>
    );
};

