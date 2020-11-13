import {Link} from "gatsby";
import React from "react";
import logo from '../images/logo.svg';

function Logo() {
    return (
        <Link to="/" aria-label="Home" className="flex items-center justify-center">
            <img className="h-8 w-auto sm:h-10 m-2"
                 src={logo}
                 alt="Logo"/>
            <h1 className="text-xl">Snowflake</h1>
        </Link>
    )
}

function NavBarLink({to, children}: { to: string, children: React.ReactNode }) {
    return (
        <Link to={to}
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out mr-2">
            {children}
        </Link>
    )
}


export default function Header() {
    return (
        <header className="pt-6 px-4">
            <div className="container flex items-center mx-auto">
                <Logo/>
                <nav className="flex items-center justify-between ml-auto">
                    <NavBarLink to="/products">Products</NavBarLink>
                    <NavBarLink to="/company">Company</NavBarLink>
                </nav>
                <nav className="flex items-center justify-between ml-5">
                <span className="inline-flex rounded-md">
                    <Link to="/login"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                        Log in
                    </Link>
                </span>
                    <span className="inline-flex rounded-md shadow-sm ml-2">
                  <Link to="/sign-up"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Sign up
                  </Link>
                </span>
                </nav>
            </div>
        </header>
    );
}
