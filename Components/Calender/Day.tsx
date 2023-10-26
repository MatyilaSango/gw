import { monthlyData } from "../../Types/types"
import styles from "./Day.module.css"

export default function Day({ day, icon, temperature, isToday, isPast }: monthlyData | any) {
    return (
        <div className={`${styles["Day-wrapper"]} ${isToday ? styles["is-today"] : isPast ? styles["is-past"] : ""}`}>
            <div className={styles["Day-wrapper__day"]}>
                {day}
            </div>
            <div className={styles["Day-wrapper__icon"]}>
                {icon ? <img src={icon} alt="pic" /> : ""}
            </div>
            <div className={styles["Day-wrapper__temperature"]}>
                <span className={styles["Day-wrapper__temperature--high"]}>
                    {temperature.high}
                </span>
                <span className={styles["Day-wrapper__temperature--low"]}>
                    {temperature.low}
                </span>
            </div>
        </div>
    )
}
