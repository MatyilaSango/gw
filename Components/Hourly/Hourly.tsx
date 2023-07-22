import React from 'react'
import { hourlydataType } from '../../Types/types'
import styles from "./Hourly.module.css"
import Image from 'next/image'

export default function Hourly({hour, icon, temp, type}: hourlydataType | any) {

  return (
    <div className={styles["Hourly-Wrapper"]}>
      <div className={styles['Hourly-Wrapper__time']}>
        <span>{hour}</span>
      </div>
      <div className={styles['Hourly-Wrapper__icon_type']}>
        <Image src={icon} className={styles["Hourly-Wrapper__icon_type__img"]} alt="pic" />
        <p className={styles["Hourly-Wrapper__type"]}>
          <span>{type}</span>
        </p>
      </div>
      <div className={styles['Hourly-Wrapper__temp']}>
        <span>{temp}C</span>
      </div>
    </div>
  )
}
