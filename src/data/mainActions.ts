import { LucideIcon, MapPin, Calendar } from 'lucide-react';

interface MainAction {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  color: string;
  textColor: string;
}

export const mainActions: MainAction[] = [
  {
    icon: MapPin,
    title: 'Voir les praticiens',
    description: 'Trouvez un médecin près de chez vous',
    path: '/search',
    color: 'bg-[#FFE8E8]',
    textColor: 'text-[#ff3c00]'
  },
  {
    icon: Calendar,
    title: 'Mes rendez-vous',
    description: 'Consultez et gérez vos rendez-vous',
    path: '/appointments',
    color: 'bg-[#EDF5FF]',
    textColor: 'text-[#424e6f]'
  }
];