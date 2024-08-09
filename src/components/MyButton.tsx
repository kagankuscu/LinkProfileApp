import styles from './MyButton.module.css';
import font from '../css/Font.module.css';

interface MyButtonProps {
    title: string;
    href: string;
}

const MyButton = ({ title, href } : MyButtonProps) => {
    return <div className={`${styles.button} ${styles["button-container"]}`}>
        <a target="_blank" className={`${font['roboto-regular']} ${styles.button} ${styles["button-body"]}`} style={{
        }} href={href}>{title}</a>
    </div>;
};
export default MyButton;