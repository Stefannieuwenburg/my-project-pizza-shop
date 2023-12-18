import React from 'react';
import logo from "../../assets/logo/pizza.svg"
export const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} className="w-20 h-20 object-cover" />
            <span className="ml-3 text-xl">Pizza House</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Pizza House</a>
            <a className="mr-5 hover:text-gray-900">Menu</a>
            <a className="mr-5 hover:text-gray-900">Gallery</a>
            <a className="mr-5 hover:text-gray-900">Order</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
