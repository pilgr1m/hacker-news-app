import React from 'react'
import { formatDate } from '../helpers/helper'

import style from "./style.module.css"


export const TableItem = ({ news }) => {

    return (
        <>
            {
                news.map((el, i) => {
                    const id = `${el.id}+${i}`

                    return <tr key={id}>

                        <td className={style.RowLeft}>
                            {formatDate(el.time)}
                            <div className={style.timeAgo}>{el.time_ago}</div>
                        </td>

                        <td className={style.RowCentral}>
                            <a href={`https://www.${el.domain}`} target="blank">
                                {el.title}
                            </a>
                        </td>

                        <td className={style.RowRight}>
                            <a href={`https://www.${el.domain}`} target="blank">
                                {el.domain}
                            </a>
                        </td>

                    </tr>
                })
            }
        </>
    )
}
