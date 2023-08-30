import React, { MouseEvent } from "react";
import styles from "./Options.module.css";

interface IhandleSetDailyOption {
    handleSetDailyOption: (parameter: string) => void;
    offsetHours: number;
}

export default function Options({
    handleSetDailyOption,
    offsetHours,
}: IhandleSetDailyOption) {
    let arrayKeys: number[] = Array.from({ length: 12 }, (_, i) => {
        let date = new Date();
        date.setHours(date.getUTCHours() + offsetHours);
        date.setDate(date.getDate() + i);
        return date.getDate();
    });

    const handleOptionChange = (e: number): void => {
        handleSetDailyOption(String(e));
    };

    return (
        <div className={styles["Options-wrapper"]}>
            {arrayKeys.map((key_, i) => (
                <span key={key_} onClick={() => handleOptionChange(i + 1)}>
                    {key_}
                </span>
            ))}
        </div>
    );
}
