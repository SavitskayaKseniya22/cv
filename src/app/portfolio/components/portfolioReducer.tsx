import { ProjectType } from '@/app/interfaces';

export enum SortType {
  UP = 'up',
  DOWN = 'down',
}

export enum PortfolioActionKind {
  SET = 'SET',
  SELECTANDSORT = 'SELECTANDSORT',
  SORT = 'SORT',
}

export type PortfolioAction =
  | {
      type: PortfolioActionKind.SET;
      payload: ProjectType[];
    }
  | { type: PortfolioActionKind.SELECTANDSORT; payload: string }
  | { type: PortfolioActionKind.SORT; payload: SortType };

export type InstrumentsType = {
  projects: {
    source: ProjectType[];
    sorted: ProjectType[];
  };
  instruments: {
    source: string[];
    selected: string[];
  };
  sort: SortType;
};

export function fixDate(string: string) {
  return string.split('.').reverse().join('.');
}

export function getMCFromStringDate(string: string) {
  return new Date(fixDate(string)).getTime();
}

export function sortByDate(array: ProjectType[], type: SortType) {
  return array.sort((a, b) => {
    const aMC = getMCFromStringDate(a.date[0]);
    const bMC = getMCFromStringDate(b.date[0]);
    return type === SortType.DOWN ? aMC - bMC : bMC - aMC;
  });
}

export function reducer(
  state: InstrumentsType,
  action: PortfolioAction
): InstrumentsType {
  const { type, payload } = action;

  switch (type) {
    case PortfolioActionKind.SET:
      return {
        ...state,
        projects: {
          source: [...payload],
          sorted: sortByDate([...payload], state.sort),
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
        ...state,
        projects: {
          ...state.projects,
          sorted: sortByDate(sorted, state.sort),
        },
        instruments: {
          ...state.instruments,
          selected,
        },
      };
    }
    case PortfolioActionKind.SORT: {
      return {
        ...state,
        sort: payload,
        projects: {
          ...state.projects,
          sorted: sortByDate([...state.projects.sorted], payload),
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
  sort: SortType.UP,
};
