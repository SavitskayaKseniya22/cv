"use client";

import { ProjectType, ScreenSize } from "@/app/interfaces";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Complexity from "../components/complexity";
import ToolsList from "../components/tools/tools-list";
import FeaturesList from "./components/features-list";
import GithubLink from "./components/github-link";

const StyledButtonList = styled("div")`
    display: flex;
    gap: 1rem;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        position: relative;
    }
`;

const StyledPortfolioItem = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    column-gap: 2rem;
    row-gap: 1rem;
    flex-wrap: wrap;

    @media ${ScreenSize.TABLET} {
        flex-direction: row;
    }
`;

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

function PortfolioItem() {
    const [loadedData, setLoadedData] = useState<null | ProjectType>();
    const [isLoading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json")
            .then(res => res.json())
            .then((data: ProjectType[]) => {
                const searchedProject =
                    data.filter(
                        project => project.name.toLowerCase() === (params.folderName as string).replaceAll("-", " "),
                    )[0] || null;

                setLoadedData(searchedProject);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
    }, [params.folderName]);

    if (!loadedData) return <>No portfolio data</>;

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {!loadedData && !isLoading && <h1>No project data</h1>}
            {loadedData && (
                <>
                    <StyledPortfolioItem>
                        <h1>{loadedData.name}</h1>
                        <StyledButtonList>
                            <Link href={loadedData.deploy} target="_blank">
                                <ArrowUpOnSquareStackIcon className="styled-svg styled-svg_big styled-svg_red" />
                            </Link>
                            <GithubLink href={loadedData.github} />
                            <Complexity complexity={loadedData.complexity} className="complexity_in-project" />
                        </StyledButtonList>
                    </StyledPortfolioItem>

                    <p>{loadedData.description}</p>
                    <ToolsList tools={loadedData.instruments} />
                    <FeaturesList data={loadedData} title={params.folderName as string} />
                </>
            )}
        </>
    );
}

export default PortfolioItem;
