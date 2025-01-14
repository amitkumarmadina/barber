import React from 'react';
import { Scissors } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Elite Cuts</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#barbers" className="hover:text-gray-300">Our Barbers</a></li>
              <li><a href="#book" className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100">Book Now</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}