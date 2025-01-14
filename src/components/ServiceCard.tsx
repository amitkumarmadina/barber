import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
      <div className="flex items-center space-x-4 text-gray-600 mb-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{service.duration} min</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>${service.price}</span>
        </div>
      </div>
      <button
        onClick={() => onSelect(service)}
        className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        Select Service
      </button>
    </div>
  );
}