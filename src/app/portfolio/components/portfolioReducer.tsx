import { ProjectType, InstrumentsType } from '@/components/interfaces';

export enum PortfolioActionKind {
  SET = 'SET',
  SELECTANDSORT = 'SELECTANDSORT',
}

export type PortfolioAction =
  | {
      type: PortfolioActionKind.SET;
      payload: ProjectType[];
    }
  | { type: PortfolioActionKind.SELECTANDSORT; payload: string };

export function reducer(
  state: InstrumentsType,
  action: PortfolioAction
): InstrumentsType {
  const { type, payload } = action;
  switch (type) {
    case PortfolioActionKind.SET:
      return {
        projects: {
          source: [...payload],
          sorted: [...payload],
        },
        instruments: {
          source: Array.from(
            new Set(payload.map((item) => item.instruments).flat())
          ),
          selected: [],
        },
      };
    case PortfolioActionKind.SELECTANDSORT: {
      let selected = [...state.instruments.selected];

      selected = selected.includes(payload)
        ? selected.filter((string) => string !== payload)
        : selected.concat(payload);

      const sorted = [...state.projects.source].filter((dataItem) =>
        selected.every((currentValue) =>
          dataItem.instruments.includes(currentValue)
        )
      );

      return {
        projects: {
          ...state.projects,
          sorted,
        },
        instruments: {
          ...state.instruments,
          selected,
        },
      };
    }
    default:
      return state;
  }
}

export const portfolioInitialState = {
  projects: {
    source: [],
    sorted: [],
  },
  instruments: {
    source: [],
    selected: [],
  },
};
