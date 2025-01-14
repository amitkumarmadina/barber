import { Barber, Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Classic Haircut',
    duration: 30,
    price: 30,
  },
  {
    id: '2',
    name: 'Beard Trim',
    duration: 20,
    price: 20,
  },
  {
    id: '3',
    name: 'Hot Towel Shave',
    duration: 45,
    price: 35,
  },
  {
    id: '4',
    name: 'Hair + Beard Combo',
    duration: 60,
    price: 45,
  },
];

export const barbers: Barber[] = [
  {
    id: '1',
    name: 'ZAID KHAN',
    specialties: ['Classic Cuts', 'Fades'],
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400',
  },
  {
    id: '2',
    name: 'Jawed Habib',
    specialties: ['Beard Grooming', 'Hot Towel Shaves'],
    image: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=400',
  },
  {
    id: '3',
    name: 'Aalim Hakim',
    specialties: ['Modern Styles', 'Hair Design'],
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400',
  },
];