import { ProjectType, SortType } from "./app/interfaces";

export function fixDate(string: string) {
    return string.split(".").reverse().join(".");
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
