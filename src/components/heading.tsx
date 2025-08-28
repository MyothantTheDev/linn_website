"use client";

import { Phone, Email, WhatsApp } from "@mui/icons-material";

export default function Header() {

  return (
    <header>
      <div className="bg-blue-900 text-white text-sm justify-around px-6 py-2.5 lg:flex grid grid-cols-1 gap-4">

        {/* company contact */}
        <div className="lg:flex lg:gap-20 lg:items-center grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Phone fontSize="small" />
            <span>+65 8385 2992</span>
          </div>
          <a aria-label="Chat on WhatsApp" 
            href="https://wa.me/6583852992" 
            target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <WhatsApp fontSize="small" />
            <span>+65 8385 2992</span>
          </a>
          <a 
            href="mailto:linnaccountancy@gmail.com" 
            className="flex items-center gap-2 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <Email fontSize="small"/>
            <span>linnaccountancy@gmail.com</span>
          </a>

        </div>

        {/* contact buttons */}
        <div className="flex items-center">
          <a className="text-white text-lg bg-green-400 py-3 px-6 rounded-sm hover:bg-blue-400 transition ease-in-out">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}