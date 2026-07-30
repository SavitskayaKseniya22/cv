"use client";

import { ProjectType } from "@/app/interfaces";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Complexity from "../components/Complexity/Complexity";
import FeaturesList from "./components/FeaturesLlist/FeaturesLlist";
import GithubLink from "./components/GithubLink";
import styles from "./project.module.scss";
import Icon from "@/components/Icon/Icon";

function PortfolioItem() {
    const { folderName } = useParams<{ folderName: string }>();

    const [project, setProject] = useState<ProjectType | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const slug = folderName.replaceAll("-", " ").toLowerCase();

        fetch("https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }

                return res.json();
            })
            .then((data: ProjectType[]) => {
                const foundProject = data.find(project => project.name.toLowerCase() === slug) ?? null;

                setProject(foundProject);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [folderName]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load project.</p>;
    }

    if (!project) {
        return <h1>Project not found.</h1>;
    }

    return (
        <>
            <div className={styles.project__header}>
                <h2>{project.name}</h2>
                <div className={styles.project__buttons}>
                    {project.deploy && (
                        <Link href={project.deploy} target="_blank" className={styles.project__button_deploy}>
                            <Icon icon={ArrowUpOnSquareStackIcon} />
                        </Link>
                    )}
                    <GithubLink href={project.github} />
                    <Complexity complexity={project.complexity} className="complexity_in-project" />
                </div>
            </div>

            <p>{project.description}</p>

            {project.instruments.length > 0 && (
                <ul className={styles.project__instruments}>
                    {project.instruments.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}

            <FeaturesList data={project} title={folderName} />
        </>
    );
}

export default PortfolioItem;
