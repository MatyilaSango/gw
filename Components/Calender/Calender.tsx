import { monthlyData, monthlyWeatherData } from "../../Types/types";
import styles from "./Calender.module.css";
import Day from "./Day";

export default function Calender({
  month,
  year,
  data,
}: monthlyWeatherData | any) {
  const weekDays: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date();
  return (
    <div className={styles["Calender-wrapper"]}>
      <div className={styles["Calender-wrapper__heading"]}>
        <div className={styles["Calender-wrapper__heading__text"]}>
          <span>Calender</span>
        </div>
        <div className={styles["Calender-wrapper__heading__month-year"]}>
          <span>{month} {year}</span>
        </div>
      </div>
      <div className={styles["Calender-wrapper__days"]}>
        {weekDays.map((day, indx) => (
          <div key={indx} className={styles["Calender-wrapper__days-day"]}>{day}</div>
        ))}
      </div>
      <div className={styles["Calender-wrapper__days-container"]}>
        {data?.map((monthData: monthlyData, indx: number) => {
          let dateForThisData = new Date();
          dateForThisData.setDate(Number(monthData.day))

          return <Day
          key={indx}
            day={monthData.day}
            icon={monthData.icon}
            temperature={monthData.temperature}
            isToday={Number(monthData.day) === date.getDate()}
            isPast={dateForThisData < date}
          />
        })}
      </div>
    </div>
  );
}
