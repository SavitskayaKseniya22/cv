"use client";

import { ProjectType } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.scss";

const imageLoader = ({ src }: { src: string }) => src;

function ProjectPreview({ data }: { data: ProjectType }) {
    return (
        <Link href={`/portfolio/${data.name.toLowerCase().replaceAll(" ", "-")}`} className={styles.project}>
            <h3>{data.name}</h3>
            <Image
                fill
                src={data.preview}
                loader={imageLoader}
                alt={data.name}
                unoptimized
                placeholder="blur"
                blurDataURL='"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8pqT0HwAFCwIbEaevOQAAAABJRU5ErkJggg=="'
            />
        </Link>
    );
}

export default ProjectPreview;
