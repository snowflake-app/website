import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = { children?: React.ReactNode }

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col bg-white overflow-hidden h-full">
            <Header/>
            <main
                className="container mt-10 mx-auto px-4 flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
