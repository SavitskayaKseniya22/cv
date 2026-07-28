"use client";

import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./contacts.module.scss";

function ContactsList() {
    return (
        <ul className={styles.contacts}>
            <li className={styles.contacts__item}>
                <AtSymbolIcon className="styled-svg styled-svg_medium styled-svg_red" />
                <Link href="mailto:kseniia.savitskaia@gmail.com">kseniia.savitskaia@gmail.com</Link>
            </li>
            <li className={styles.contacts__item}>
                <PhoneIcon className="styled-svg styled-svg_medium styled-svg_red" />
                <Link href="tel:+79520056415">+7-952-005-64-15</Link>
            </li>
            <li className={styles.contacts__item}>
                <PhoneIcon className="styled-svg styled-svg_medium styled-svg_red" />
                <Link href="tel:+359876032638">+359-876-032-638</Link>
            </li>
        </ul>
    );
}

export default ContactsList;
