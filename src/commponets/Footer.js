import React from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-200 to-blue-400 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/logo.png" 
            alt="Technohub Logo" 
            className="w-24 mb-2"
          />
          <p className="text-sm text-gray-700">a bridge to success</p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-800">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-800">
              <Linkedin size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-600">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Site Map */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Site Map</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-900">Home</a></li>
            <li><a href="/about" className="hover:text-blue-900">About us</a></li>
            <li><a href="/contact" className="hover:text-blue-900">Contact us</a></li>
            <li><a href="/map" className="hover:text-blue-900">Google Map</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 justify-center md:justify-start">
              <MapPin size={16} className="mt-1" />
              <span>
                #131A, 1st floor, 80 Feet Rd, RMV 2nd stage,<br />
                MET Layout, Ashwath Nagar, Sanjaynagar,<br />
                Bengaluru-94.
              </span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={16} /> 9849175588
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={16} /> shameer@technohubtrainings.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-sky-300 text-center py-3 text-xs text-gray-700">
        © {new Date().getFullYear()} Technohub. All Rights Reserved.
      </div>
    </footer>
  );
}
