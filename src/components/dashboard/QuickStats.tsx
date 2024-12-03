import React from 'react';
import { Users, Calendar, MessageSquare } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Patients',
    value: '124',
    color: 'bg-[#FFE8E8]',
    textColor: 'text-mybakup-coral'
  },
  {
    icon: Calendar,
    label: 'Rendez-vous',
    value: '48',
    color: 'bg-[#EDF5FF]',
    textColor: 'text-mybakup-blue'
  },
  {
    icon: MessageSquare,
    label: 'Messages',
    value: '12',
    color: 'bg-[#E8F4FF]',
    textColor: 'text-[#47559E]'
  }
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={stat.label}
            className="bg-white rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <Icon className={`w-5 h-5 ${stat.textColor}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-semibold text-mybakup-blue">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}