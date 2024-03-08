import React from "react";
import styles from "./SunriseSunset.module.css";
import SunriseSunsetTable from "../Table/SunriseSunsetTable";

interface props {
  title: string;
  icon: string;
  duration: string;
  rise: string;
  set: string;
}

export default function SunriseSunset({
  title,
  icon,
  duration,
  rise,
  set
}: props | any) {
  return (
    <div className={styles["sunrise-sunset-wrapper-card"]}>
      <div className={styles["sunrise-sunset-wrapper-card_title"]}>
      <img src={icon} alt="pic" />
          &nbsp;|&nbsp;
        <span>{title}</span>
      </div>
      <SunriseSunsetTable duration={duration} rise={rise} set={set} />
    </div>
  );
}
