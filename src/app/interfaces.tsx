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

export enum SortType {
    UP = "up",
    DOWN = "down",
}
