import React from "react";

export default function Footer() {
    return (
        <footer className="relative py-20 mt-auto">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" id="contact-wave"
                     viewBox="0 0 800 338.05"
                     preserveAspectRatio="none">
                    <path fill="#ffffff" fillOpacity="1">
                        <animate attributeName="d"
                                 values="
                             M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;
                             M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;
                             M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z;
                             M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z"
                                 repeatCount="indefinite" dur="30s">
                        </animate>
                    </path>
                </svg>
            </div>
        </footer>
    )
}
