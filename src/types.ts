export interface Appointment {
  id: string;
  clientName: string;
  service: Service;
  date: string;
  time: string;
  barber: Barber;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

export interface Barber {
  id: string;
  name: string;
  specialties: string[];
  image: string;
}