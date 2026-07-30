import Link from "next/link";
import styles from "./person.module.scss";

function Person() {
    return (
        <div className={styles.person}>
            <h1>Savitskaia Kseniia</h1>
            <h2>Web developer</h2>
            <ul className={styles.person__socials}>
                <li>
                    <Link href="https://www.linkedin.com/in/kseniia-savitskaia" target="_blank">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/SavitskayaKseniya22" target="_blank">
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link href="https://t.me/Berillllium" target="_blank">
                        Telegram
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Person;
