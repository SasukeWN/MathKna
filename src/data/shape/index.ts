import { persegiData } from './persegi';
import { persegiPanjangData } from './persegiPanjang';
import { segitigaData } from './segitiga';
import { lingkaranData } from './lingkaran';

export type ShapeData = {
  id: string;
  name: string;
  type: string;
  iconName: string;
  formulaLuas: string;
  formulaKeliling: string;
  description: string;
};

export const shapes: ShapeData[] = [
  persegiData,
  persegiPanjangData,
  segitigaData,
  lingkaranData,
];

