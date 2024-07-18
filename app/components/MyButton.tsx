import { Roboto } from "next/font/google";
import styles from "./MyButton.module.css";

interface MyButtonProps {
    title: string;
    href: string;
}

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MyButton({ title, href }: MyButtonProps) {
    return <div className={`${styles.button} ${styles["button-container"]}`}>
        <a target="_blank" className={`${roboto.className} ${styles.button} ${styles["button-body"]}`} style={{
        }} href={href}>{title}</a>
    </div>;
}