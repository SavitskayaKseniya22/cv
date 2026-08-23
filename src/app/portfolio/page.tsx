"use client";

import { useState, useEffect } from "react";
import { ProjectType } from "../interfaces";
import styles from "./portfolio.module.scss";
import Icon from "@/components/icon/icon";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ProjectPreview from "./components/project-preview/project-preview";

function Portfolio() {
    const [portfolioData, setPortfolioData] = useState<ProjectType[]>([]);

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/projects")
            .then(resource => resource.json())
            .then((data: ProjectType[]) => {
                setPortfolioData(data);
            })
            .catch(error_ => {
                console.log(error_);
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

    if (portfolioData.length === 0) {
        return <p>No portfolio data.</p>;
    }

    return (
        <>
            <div className={styles.portfolio__header}>
                <h2 className={styles["portfolio__chapter-title"]}>
                    <Icon icon={BriefcaseIcon} />
                    Learning projects
                </h2>
            </div>

            <ul className={styles.portfolio__projects}>
                {portfolioData.map(project => (
                    <ProjectPreview key={`${project.name}-${project.github}`} data={project} />
                ))}
            </ul>
        </>
    );
}

export default Portfolio;
