import { hourlydataType } from '../../Types/types'
import styles from "./Hourly.module.css"
import AnimatedHourly from './AnimatedHourly'
import { useEffect, useState } from 'react'
import React from 'react'

export default function Hourly({ id, hour, icon, temp, type, setShowHourlyFullView, handleHourlyFullView }: hourlydataType | any) {
  const [isAnimationAvailable, setIsAnimationAvailable] = useState<Boolean>(true)

  const handleHourly = () => {
    handleHourlyFullView(id)
    setShowHourlyFullView(true)
  }

  useEffect(() => {
    (async () => {
      let isThereAnimation = await AnimatedHourly(icon, id)
    if (isThereAnimation){
      setIsAnimationAvailable(prev => prev = true)
    } else {
      setIsAnimationAvailable(prev => prev = false)
    }
    })()
  })

  return (
    <div className={styles["Hourly-Wrapper"]} onClick={handleHourly}>
      <div className={styles['Hourly-Wrapper__time']}>
        <span>{hour}</span>
      </div>
      <div className={`${styles['Hourly-Wrapper__icon_type']} ${isAnimationAvailable ? styles['iscanvas']: ""} `}>
        {isAnimationAvailable ?
          <div id={`Hourly-Wrapper__icon_type__img_${id}`} className={styles[`Hourly-Wrapper__icon_type__img_${id}`]} style={{ scale: 0.25, position: "relative", top: 90 }}></div> 
          :
          <img src={icon} className={styles["Hourly-Wrapper__icon_type__img"]} alt="pic" />
        }
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
