import { turunanDasarData } from './turunanDasar';

export type TurunanData = {
  id: string;
  name: string;
  type: string;
  iconName: string;
  formula: string;
  description: string;
  isAvailable: boolean;
};

export const turunanList: TurunanData[] = [
  turunanDasarData,
  {
    id: 'garis-singgung',
    name: 'Garis Singgung Kurva',
    type: 'Aplikasi Turunan',
    iconName: 'TrendingUp',
    formula: "y - y₁ = f'(x₁)(x - x₁)",
    description: 'Menentukan persamaan garis singgung pada kurva di suatu titik absis tertentu menggunakan gradien turunan pertama.',
    isAvailable: false,
  },
  {
    id: 'integral-dasar',
    name: 'Integral Aljabar',
    type: 'Anti-Turunan',
    iconName: 'Activity',
    formula: '∫ axⁿ dx = a/(n+1) xⁿ⁺¹ + C',
    description: 'Menghitung kebalikan dari turunan (anti-derivatif) dari fungsi aljabar sederhana.',
    isAvailable: false,
  },
];

