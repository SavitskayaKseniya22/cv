import { ProjectType } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.scss";
import GithubLink from "../../[folderName]/components/GithubLink";
import Icon from "@/components/Icon/Icon";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";

const imageLoader = ({ src }: { src: string }) => src;

function ProjectPreview({ data }: { data: ProjectType }) {
    return (
        <li className={styles.project}>
            <div className={styles.project__preview}>
                <Image
                    fill
                    src={data.preview}
                    loader={imageLoader}
                    alt={data.name}
                    unoptimized
                    placeholder="blur"
                    blurDataURL='"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8pqT0HwAFCwIbEaevOQAAAABJRU5ErkJggg=="'
                />
            </div>
            <div className={styles.project__decription}>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </div>

            {data.deploy && (
                <Link href={data.deploy} target="_blank" className={styles.project__button_deploy}>
                    <Icon icon={ArrowUpOnSquareStackIcon} />
                </Link>
            )}
            <GithubLink href={data.github} />
        </li>
    );
}

export default ProjectPreview;
