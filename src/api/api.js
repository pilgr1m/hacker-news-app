import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.hnpwa.com/v0/",

})

export const newsAPI = {
    getNews(currentPage) {
        return instance.get(`news/${currentPage}.json`)
    },
}
