import { HomeButton } from "../../../components/";
import styles from "./Fallback.module.css";

export const Fallback = () => {
    return (
        <div className={styles.fallbackContainer}>
            <h1>404 Not found</h1>
            <HomeButton/>
        </div>
    );
};