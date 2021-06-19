import React from 'react'
import style from "./style.module.css"
import load from "../images/load-2.gif"


export const Loader = () => {
    return (
        <div className={style.loader}>
            <img src={load} alt="loading..." />
        </div>
    )
}
