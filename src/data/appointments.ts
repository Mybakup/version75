import type { Appointment } from '../types/appointments';

export const mockAppointment: Appointment = {
  id: '1',
  date: '2 juin 2023',
  time: '09:30',
  doctor: {
    name: 'Dr Virginie USOLINI',
    specialty: 'Laboratoire',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
  },
  patient: {
    name: 'Julien Bakala',
    gender: 'Homme',
    age: 38,
    phone: '+33650439664'
  },
  location: {
    type: 'Cabinet',
    address: 'Sydney, New South Wales',
    city: 'Sydney',
    country: 'AUS',
    phone: '+33675990550'
  },
  price: 40.00
};