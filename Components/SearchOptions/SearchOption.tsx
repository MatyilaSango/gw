import React, { MouseEvent } from 'react'
import styles from "./SearchOption.module.css"

interface IsearchOption {
  location: string,
  handleSetSearch: (parameter: string) => void
}

export default function SearchOption({ location, handleSetSearch }: IsearchOption) {

  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    handleSetSearch(String(e.currentTarget.lastChild?.nodeValue))
  }

  return (
    <div className={styles['search-option-wrapper']}>
      <p onClick={handleOptionClick}>{location}</p>
    </div>
  )
}
