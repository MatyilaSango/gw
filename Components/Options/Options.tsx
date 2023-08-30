import React, { MouseEvent } from 'react'
import styles from "./Options.module.css"

interface IhandleSetDailyOption {
    handleSetDailyOption: (parameter: String) => void
}

export default function Options({ handleSetDailyOption }:  IhandleSetDailyOption){

    let arrayKeys: number[] = Array.from({length: 12}, (_,i) => i+1)

    const handleOptionChange = (e: MouseEvent<HTMLSpanElement>): void => {
        handleSetDailyOption(String(e.currentTarget.lastChild?.nodeValue))
    }

    return (
    <div className={styles['Options-wrapper']}>
        {arrayKeys.map(key_ => (
            <span key={key_} onClick={handleOptionChange}>
                {key_}
            </span>
        ))}
    </div>
    )
}
