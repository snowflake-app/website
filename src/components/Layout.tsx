import React from "react";
import Header from "./Header";

type LayoutProps = { children?: React.ReactNode }

export default function Layout({children}: LayoutProps) {
    return (
        <div className="relative bg-white overflow-hidden">
            <Header/>
            <main
                className="container mt-10 mx-auto px-4">
                {children}
            </main>
        </div>
    )
}
