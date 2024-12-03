import { Video, Mic, Pill, FileText, Briefcase, Bot, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  color: string;
  textColor: string;
}

export const services: Service[] = [
  {
    icon: Shield,
    title: 'Mon assurance',
    description: 'Découvrez nos assurances partenaires',
    path: '/insurance',
    color: 'bg-[#E8F4FF]',
    textColor: 'text-[#424e6f]'
  },
  {
    icon: Video,
    title: 'Téléconsultation',
    description: 'Consultez un médecin en ligne',
    path: '/teleconsult',
    color: 'bg-[#EDF5FF]',
    textColor: 'text-[#424e6f]'
  },
  {
    icon: Mic,
    title: 'Commande vocale',
    description: 'Utilisez votre voix pour naviguer',
    path: '/voice-command',
    color: 'bg-[#FFE8E8]',
    textColor: 'text-[#ff3c00]'
  },
  {
    icon: Pill,
    title: 'Traducteur de médicaments',
    description: 'Trouvez les équivalents de vos médicaments',
    path: '/translator',
    color: 'bg-[#EDF5FF]',
    textColor: 'text-[#424e6f]'
  },
  {
    icon: FileText,
    title: 'Fiche pratique',
    description: 'Informations par destination',
    path: '/travel-guide',
    color: 'bg-[#FFE8E8]',
    textColor: 'text-[#ff3c00]'
  },
  {
    icon: Briefcase,
    title: 'Préparer mon voyage',
    description: 'Trousse à pharmacie personnalisée',
    path: '/travel-prep',
    color: 'bg-[#EDF5FF]',
    textColor: 'text-[#424e6f]'
  },
  {
    icon: Bot,
    title: 'Assistant médical',
    description: 'Votre aide personnelle',
    path: '/assistant',
    color: 'bg-[#FFE8E8]',
    textColor: 'text-[#ff3c00]'
  }
];