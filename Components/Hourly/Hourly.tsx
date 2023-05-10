import React from 'react'
import { hourlydataType } from '../../Types/types'
import styles from "./Hourly.module.css"
import Image from 'next/image'

export default function Hourly({hour, icon, temp}: hourlydataType | any) {

  return (
    <div className={styles["Hourly-Wrapper"]}>
      <div className={styles['Hourly-Wrapper__time']}>
        <span>{hour}</span>
      </div>
      <div className={styles['Hourly-Wrapper__icon']}>
        <Image src={icon} className={styles["Hourly-Wrapper__icon__img"]} alt="pic" />
      </div>
      <div className={styles['Hourly-Wrapper__temp']}>
        <span>{temp}C</span>
      </div>
    </div>
  )
}
