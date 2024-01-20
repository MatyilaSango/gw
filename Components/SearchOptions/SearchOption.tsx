import React, { MouseEvent } from 'react'
import styles from "./SearchOption.module.css"
import { searchDataType, searchLocationType } from '../../Types/types'

interface IsearchOption {
  location: searchLocationType,
  handleSetSearch: (parameter: searchDataType) => void
}

export default function SearchOption({ location, handleSetSearch }: IsearchOption) {

  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    const geoData = location.link.replace("https://www.accuweather.com/web-api/three-day-redirect?key=GEO_", "").split("&")[0].split("%2c")
    handleSetSearch({city: location.location, geo: {long: geoData[0], lat: geoData[1]}})
  }

  return (
    <div className={styles['search-option-wrapper']}>
      <p onClick={handleOptionClick}>{location.location}</p>
    </div>
  )
}
