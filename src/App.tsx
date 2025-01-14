import React, { useState } from 'react';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { BarberCard } from './components/BarberCard';
import { BookingForm } from './components/BookingForm';
import { services, barbers } from './data';
import { Service, Barber } from './types';

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (formData: { name: string; email: string; date: string; time: string }) => {
    // In a real app, this would make an API call to save the appointment
    console.log('Booking submitted:', {
      ...formData,
      service: selectedService,
      barber: selectedBarber,
    });
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {bookingSuccess ? (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-8">Thank you for choosing Elite Cuts. We'll see you soon!</p>
            <button
              onClick={() => {
                setSelectedService(null);
                setSelectedBarber(null);
                setBookingSuccess(false);
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <>
            <section id="services" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onSelect={setSelectedService}
                  />
                ))}
              </div>
            </section>

            <section id="barbers" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expert Barbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {barbers.map((barber) => (
                  <BarberCard
                    key={barber.id}
                    barber={barber}
                    onSelect={setSelectedBarber}
                  />
                ))}
              </div>
            </section>

            <section id="book" className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Your Appointment</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Selected Service:</h3>
                  <p className="text-gray-900">
                    {selectedService ? selectedService.name : 'Please select a service'}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Selected Barber:</h3>
                  <p className="text-gray-900">
                    {selectedBarber ? selectedBarber.name : 'Please select a barber'}
                  </p>
                </div>
                <BookingForm
                  selectedService={selectedService}
                  selectedBarber={selectedBarber}
                  onSubmit={handleBookingSubmit}
                />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;