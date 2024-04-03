export enum ScreenSize {
  MOBILE = '(min-width: 320px)',
  TABLET = '(min-width: 768px)',
  LAPTOPS = '(min-width: 1024px)',
  LAPTOPM = '(min-width: 1280px)',
  LAPTOPL = '(min-width: 1920px)',
  LAPTOPXL = '(min-width: 2560px)',
}

export type ProjectType = {
  name: string;
  description: string;
  date: [string, string];
  deploy: string;
  github: string;
  instruments: string[];
  preview: string;
  complexity: number;
  task?: string;
  features?: string[];
  murkup?: string[];
  isItReady: boolean;
};

export const enum SVGType {
  BIG,
  MIDDLE,
  SMALL,
}
