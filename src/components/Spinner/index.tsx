import * as React from "react";
import styles from "./spinner.module.css";

export const Spinner = () => {
    return (
        <>
            <div className={styles.snipperwrapper}>
                <div className={`${styles.middle}`}>
                    <div className={`${styles.bar} ${styles.bar1}`}></div>
                    <div className={`${styles.bar} ${styles.bar2}`}></div>
                    <div className={`${styles.bar} ${styles.bar3}`}></div>
                    <div className={`${styles.bar} ${styles.bar4}`}></div>
                    <div className={`${styles.bar} ${styles.bar5}`}></div>
                    <div className={`${styles.bar} ${styles.bar6}`}></div>
                    <div className={`${styles.bar} ${styles.bar7}`}></div>
                    <div className={`${styles.bar} ${styles.bar8}`}></div>
                    <div className={`${styles.bar} ${styles.bar9}`}></div>
                    <div className={`${styles.bar} ${styles.bar10}`}></div>
                </div>
            </div>            
        </>
    )
}