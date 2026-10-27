import { kuadratData } from './kuadrat';
import { garisLurusData } from './garisLurus';
import { spldvData } from './spldv';

export type AljabarData = {
  id: string;
  name: string;
  type: string;
  iconName: string;
  formula: string;
  description: string;
  isAvailable: boolean;
};

export const aljabarList: AljabarData[] = [
  kuadratData,
  garisLurusData,
  spldvData,
];

