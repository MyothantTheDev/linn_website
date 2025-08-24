"use client";

import { Phone, Email, WhatsApp } from "@mui/icons-material";

export default function Header() {
  

  return (
    <header>
      <div className="bg-blue-900 text-white text-sm justify-around px-6 py-2.5 flex">

        {/* company contact */}
        <div className="flex gap-20 items-center">
          <div className="flex items-center gap-2">
            <Phone fontSize="small" />
            <span>+65 8385 2992</span>
          </div>
          <div className="flex items-center gap-2">
            <WhatsApp fontSize="small" />
            <span>+65 8385 2992</span>
          </div>
          <div className="flex items-center gap-2">
            <Email fontSize="small"/>
            <span>linnaccountancy@gmail.com</span>
          </div>
        </div>

        {/* contact buttons */}
        <div className="flex items-center gap-4">
          <button className="text-white text-lg bg-green-400 py-3 px-6 rounded-sm hover:bg-blue-400 transition ">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}