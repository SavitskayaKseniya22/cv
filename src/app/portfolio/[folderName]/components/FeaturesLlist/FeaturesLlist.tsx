import { ProjectType } from "@/app/interfaces";
import Image from "next/image";
import styles from "./features.module.scss";

function FeaturesList({ data, title }: { data: ProjectType; title: string }) {
    return data.features && data.features.length > 0 ? (
        <ul className={styles.features}>
            {data.features.map(feature => (
                <li key={feature} className={styles.features__item}>
                    <h3>{feature}</h3>
                    <Image
                        src={`https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/photos/${title}/features/${feature}.png`}
                        alt={feature}
                        fill
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+w8AAUEBH2QH9c4AAAAASUVORK5CYII="
                        objectFit="contain"
                        style={{ opacity: 0.2 }}
                    />
                </li>
            ))}
        </ul>
    ) : (
        <div className={styles.features_empty}>No features</div>
    );
}

export default FeaturesList;
