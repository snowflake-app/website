import React from "react"
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Your organization is
                    <br/>
                    <span className="text-indigo-600">unique</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Empower your teams to perform, encourage and share. Align your goals and drive engagement,
                    especially in the times of change.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </Layout>);
}
