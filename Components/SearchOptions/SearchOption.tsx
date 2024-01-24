import React, { MouseEvent } from 'react'
import styles from "./SearchOption.module.css"
import { searchDataType } from '../../Types/types'

interface IsearchOption {
  location: searchDataType,
  handleSetSearch: (parameter: searchDataType) => void
}

export default function SearchOption({ location, handleSetSearch }: IsearchOption) {
  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    handleSetSearch({city: location.city, geo: location.geo})
  }

  return (
    <div className={styles['search-option-wrapper']}>
      <p onClick={handleOptionClick}>{location.city}</p>
    </div>
  )
}
