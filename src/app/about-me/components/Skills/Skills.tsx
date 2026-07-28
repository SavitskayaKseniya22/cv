"use client";

import {
    CodeBracketIcon,
    Cog8ToothIcon,
    HashtagIcon,
    WrenchScrewdriverIcon,
    ChartBarIcon,
    CircleStackIcon,
} from "@heroicons/react/24/outline";
import styles from "./skills.module.scss";

export default function Skills() {
    return (
        <ul className={styles.skills}>
            <li className={styles.skills__type}>
                <CodeBracketIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                </ul>
            </li>
            <li className={styles.skills__type}>
                <HashtagIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Styled Components</li>
                    <li>Tailwind CSS</li>
                    <li>MUI</li>
                    <li>BEM</li>
                    <li>Responsive Design</li>
                    <li>Pixel Perfect</li>
                </ul>
            </li>
            <li className={styles.skills__type}>
                <CircleStackIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>React Router</li>
                    <li>RTK Query</li>
                    <li>Redux</li>
                    <li>React Hook Form</li>
                    <li>Zod</li>
                </ul>
            </li>
            <li className={styles.skills__type}>
                <ChartBarIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>MUI charts</li>
                    <li>ApexCharts</li>
                </ul>
            </li>
            <li className={styles.skills__type}>
                <WrenchScrewdriverIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>Git</li>
                    <li>Vite</li>
                    <li>Storybook</li>
                    <li>ESLint</li>
                    <li>Stylelint</li>
                    <li>Prettier</li>
                    <li>Husky</li>
                    <li>Lint-staged</li>
                </ul>
            </li>
            <li className={styles.skills__type}>
                <Cog8ToothIcon className="styled-svg styled-svg_big styled-svg_red" />
                <ul className={styles.skill__item}>
                    <li>Jest</li>
                    <li>React Testing Library</li>
                </ul>
            </li>
        </ul>
    );
}
