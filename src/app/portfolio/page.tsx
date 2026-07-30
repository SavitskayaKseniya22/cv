"use client";

import { useState, useEffect, useReducer } from "react";
import { ProjectType, SortType } from "../interfaces";
import SortButtons from "./components/SortButtons/SortButtons";
import styles from "./portfolio.module.scss";
import Icon from "@/components/Icon/Icon";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import { sortByDate } from "@/utils";

export type ProjectsType = {
    projects: ProjectType[];
    sort: SortType;
};

export enum PortfolioAction {
    SET = "SET",
    SORT = "SORT",
}

export function reducer(
    state: ProjectsType,
    action:
        | {
              type: PortfolioAction.SET;
              payload: ProjectType[];
          }
        | { type: PortfolioAction.SORT; payload: SortType },
): ProjectsType {
    const { type, payload } = action;

    switch (type) {
        case PortfolioAction.SET:
            return {
                ...state,
                projects: sortByDate([...payload], state.sort),
            };

        case PortfolioAction.SORT: {
            return {
                ...state,
                sort: payload,
                projects: sortByDate([...state.projects], payload),
            };
        }

        default:
            return state;
    }
}

export const portfolioInitialState = {
    projects: [],
    sort: SortType.UP,
};

function Portfolio() {
    const [portfolioData, dispatch] = useReducer(reducer, portfolioInitialState);

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json")
            .then(res => res.json())
            .then((data: ProjectType[]) => {
                dispatch({
                    type: PortfolioAction.SET,
                    payload: data,
                });
            })
            .catch(e => {
                console.log(e);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load projects.</p>;
    }

    if (portfolioData.projects.length === 0) {
        return <p>No portfolio data.</p>;
    }

    return (
        <>
            <div className={styles.portfolio__header}>
                <h2 className={styles["portfolio__chapter-title"]}>
                    <Icon icon={BriefcaseIcon} />
                    Learning projects
                </h2>
                <SortButtons
                    sort={portfolioData.sort}
                    onClick={() => {
                        dispatch({
                            type: PortfolioAction.SORT,
                            payload: portfolioData.sort === SortType.DOWN ? SortType.UP : SortType.DOWN,
                        });
                    }}
                />
            </div>

            <ul className={styles.portfolio__projects}>
                {portfolioData.projects.map(project => (
                    <ProjectPreview key={project.name} data={project} />
                ))}
            </ul>
        </>
    );
}

export default Portfolio;
