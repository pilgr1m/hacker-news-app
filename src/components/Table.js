import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getNewsThunk, setNews } from '../redux/reducer'
import { TableItem } from './TableItem'

import style from "./style.module.css"

const Table = ({ getNewsThunk, newsData, totalCount, page }) => {

	const [data, setData] = useState(newsData)
	console.log("data: ", data)
	const [fetching, setFetching] = useState(true)

	useEffect(() => {
		setData(newsData)
	}, [newsData])

	useEffect(() => {
		if (fetching) {

			getNewsThunk(page)

		}
		console.log(page)
		setFetching(false)
	}, [fetching])




	useEffect(() => {
		document.addEventListener("scroll", scrollHandle)
		return () => {
			document.removeEventListener("scroll", scrollHandle)
		}
	})

	const scrollHandle = (e) => {
		const height = e.target.documentElement.scrollHeight
		const vision = e.target.documentElement.scrollTop
		const current = window.innerHeight
		const result = (height - (vision + current))

		console.log("newsData.length: ", newsData.length)

		if (result < 100 && newsData.length < totalCount) {
			console.log("scroll")
			setFetching(true)
		}
	}


	const sortData = (field) => {
		console.log("field", field)
		const copyData = data.concat()
		console.log(copyData)
		console.log("copyData.length ", copyData.length)
		const sortData = copyData.sort((a, b) => {
			return a[field] > b[field] ? 1 : -1
		})
		console.log("sortData", sortData)
		setData(sortData)
	}

	return (
		<>
			<table className={style.tableMain}>
				<thead>
					<tr className={style.headTable}>
						<th onClick={() => sortData("time")}>Time added</th>
						<th onClick={() => sortData("title")}>Title</th>
						<th onClick={() => sortData("domain")}>Domain</th>
					</tr>
				</thead>
				<tbody>
					<TableItem news={data} />
				</tbody>
			</table>
		</>
	)
}

const mapStatetoProps = (state) => {
	console.log("state: ", state)
	return {
		newsData: state.news.data,
		totalCount: state.news.totalCount,
		page: state.news.page,
	}
}

export default connect(mapStatetoProps, { getNewsThunk, setNews })(Table)