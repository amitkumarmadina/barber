import React from 'react';
import { Barber } from '../types';

interface BarberCardProps {
  barber: Barber;
  onSelect: (barber: Barber) => void;
}

export function BarberCard({ barber, onSelect }: BarberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={barber.image} 
        alt={barber.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{barber.name}</h3>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Specialties:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {barber.specialties.map((specialty) => (
              <span 
                key={specialty}
                className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => onSelect(barber)}
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Choose {barber.name}
        </button>
      </div>
    </div>
  );
}