import { newsAPI } from "../api/api"


const SET_NEWS = "SET_NEWS"
const SET_PAGE = "SET_PAGE"

let initialState = {
    data: [],
    totalCount: 300,
    page: 1
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, data: [...state.data, ...action.data] }
        case SET_PAGE:
            return { ...state, page: state.page + 1 }

        default: return state
    }
}

export const setNews = (data) => ({ type: SET_NEWS, data })
export const setPage = () => ({ type: SET_PAGE })

export const getNewsThunk = (page) => {
    return async (dispatch) => {
        let response = await newsAPI.getNews(page)
        if (response.status === 200) {
            dispatch(setNews(response.data))
            dispatch(setPage())
        }
    }
}


