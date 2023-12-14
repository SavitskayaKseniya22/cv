export enum ScreenSize {
  MOBILE = '(min-width: 320px)',
  TABLET = '(min-width: 768px)',
  LAPTOPS = '(min-width: 1024px)',
  LAPTOPM = '(min-width: 1280px)',
  LAPTOPL = '(min-width: 1920px)',
  LAPTOPXL = '(min-width: 2560px)',
}

export type Number = number;

export type ProjectType = {
  name: string;
  description: string;
  task: string;
  date: string;
  screenshots: string[];
  deploy: string;
  github: string;
  instruments: string[];
  preview: string;
};

export type InstrumentsType = {
  projects: {
    source: ProjectType[];
    sorted: ProjectType[];
  };

  instruments: {
    source: string[];
    selected: string[];
  };
};
