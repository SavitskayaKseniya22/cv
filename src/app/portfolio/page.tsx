"use client";

import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectType } from "../interfaces";
import { reducer, portfolioInitialState, PortfolioActionKind, SortType } from "./components/portfolio-reducer";
import SortButton from "./components/sort-button";

import ProjectsList from "./components/projects/project-list";
import ToolsList from "./components/tools/tools-list";

export const StyledMainContent = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    position: relative;
    overflow: auto;
    width: 100%;
`;

const StyledPortfolio = styled(StyledMainContent)`
    .portfolio_header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
    }
`;

function Portfolio() {
    const [porfolioData, dispatch] = useReducer(reducer, portfolioInitialState);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json")
            .then(res => res.json())
            .then((data: ProjectType[]) => {
                dispatch({
                    type: PortfolioActionKind.SET,
                    payload: data.filter(item => item.isItReady),
                });
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    return (
        <StyledPortfolio>
            <div className="portfolio_header">
                <h1>Portfolio</h1>
                <SortButton
                    sort={porfolioData.sort}
                    onClick={() => {
                        dispatch({
                            type: PortfolioActionKind.SORT,
                            payload: porfolioData.sort === SortType.DOWN ? SortType.UP : SortType.DOWN,
                        });
                    }}
                />
            </div>

            {isLoading && <p>Loading...</p>}
            {!porfolioData && !isLoading && <p>No portfolio data</p>}
            {porfolioData && (
                <>
                    <ProjectsList projects={porfolioData.projects.sorted} />

                    <ToolsList
                        tools={porfolioData.instruments.source}
                        updateList={(item: string) => {
                            dispatch({
                                type: PortfolioActionKind.SELECTANDSORT,
                                payload: item,
                            });
                        }}
                    />
                </>
            )}
        </StyledPortfolio>
    );
}

export default Portfolio;
