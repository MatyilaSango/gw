import React from 'react'
import { hourlydataType } from '../../Types/types'
import styles from "./Hourly.module.css"

export default function Hourly({id, hour, icon, temp, type, setShowHourlyFullView, handleHourlyFullView}: hourlydataType | any) {

  const handleHourly = () => {
    handleHourlyFullView(id)
    setShowHourlyFullView(true)
  }

  return (
    <div className={styles["Hourly-Wrapper"]} onClick={handleHourly}>
      <div className={styles['Hourly-Wrapper__time']}>
        <span>{hour}</span>
      </div>
      <div className={styles['Hourly-Wrapper__icon_type']}>
        <div className={styles['Hourly-Wrapper__icon_type_img-wrapper']}>
          <img src={icon} className={styles["Hourly-Wrapper__icon_type__img"]} alt="pic" />
        </div>
        <div className={styles["Hourly-Wrapper__type"]}>
          <span className={styles["Hourly-Wrapper__type-span"]}>{type}</span>
        </div>
      </div>
      <div className={styles['Hourly-Wrapper__temp']}>
        <span>{temp}C</span>
      </div>
    </div>
  )
}
