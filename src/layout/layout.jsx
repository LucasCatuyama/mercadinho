import React, { Children, useState } from "react";
import Header from './header'
import Footer from "./footer";
import IndexPage from "../pages";



export default function Layout({Children}){
    return (
        <div className="bg-bg-beige">
            <Header />
            <IndexPage>{Children}</IndexPage> 
            <Footer />
        </div>
    );
};

