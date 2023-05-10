import React, { MouseEvent } from 'react'
import styles from "./SearchOption.module.css"

interface IsearchOption {
  location: string,
  handleSetSearch: (parameter: string) => void,
  setIsNewLocationTime: (parameter: boolean) => void
}

export default function SearchOption({location, handleSetSearch, setIsNewLocationTime}: IsearchOption) {

  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    handleSetSearch(String(e.currentTarget.lastChild?.nodeValue))
    setIsNewLocationTime(true)
  }

  return (
    <div className={styles['search-option-wrapper']}>
        <p onClick={handleOptionClick}>{location}</p>
    </div>
  )
}
