"use client";

import { useState } from "react";
import Image from 'next/image';

interface NavbarProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const menuItems = ["Home", "About", "Portfolio", "Contact", "Blog"];

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full">
      <div className="flex justify-between px-8 py-8 opacity-100 transition-opacity duration-300">
        <div>
          <Image
            className="w-32 h-16 object-contain"
            src="/assets/devSiddhiLogo.png"
            alt="Dev Siddhi Logo"
            width={130}
            height={60}
          />
        </div>

        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul className="flex">
              {menuItems.map((item, index) => (
                <li
                  key={item}
                  className={`text-lg ${
                    index !== menuItems.length - 1 ? "mr-9" : ""
                  }`}
                >
                  <span
                    onClick={() => onNavigate(index)}
                    className={`cursor-pointer transition-all duration-300 relative font-medium
                      before:absolute before:w-full before:h-4 before:content-[''] 
                      before:top-[-49px] before:rounded-b before:transition-all before:duration-300
                      ${
                        activeSection === index
                          ? "before:top-[-34px] before:bg-blue-600"
                          : "hover:before:top-[-34px] hover:before:bg-blue-400"
                      }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
