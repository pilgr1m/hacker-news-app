function getNameMonth(month) {
    switch (month) {
        case 0: return "Jan"
        case 1: return "Feb"
        case 2: return "Mar"
        case 3: return "Apr"
        case 4: return "May"
        case 5: return "Jun"
        case 6: return "Jul"
        case 7: return "Aug"
        case 8: return "Sep"
        case 9: return "Oct"
        case 10: return "Nov"
        case 11: return "Dec"
        default: return "Month"
    }
}
function getNameDay(month) {
    switch (month) {
        case 0: return "Sun"
        case 1: return "Mon"
        case 2: return "Tue"
        case 3: return "Wed"
        case 4: return "Thu"
        case 5: return "Fri"
        case 6: return "Sat"
        default: return "Day"
    }
}

export function formatDate(value) {
    const date = new Date((value) * 1000);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const dayMonth = date.getDate();
    const dayWeek = date.getDay();
    const month = date.getMonth();

    // const weather = `${getNameDay(dayWeek)} • ${hours}:${minutes <= 9 ? `0${minutes}` : minutes}${hours >= 11 ? "pm" : "am"}, ${getNameMonth(month)} ${dayMonth}`

    const result = `${getNameDay(dayWeek)} • ${hours}:${minutes <= 9 ? `0${minutes}` : minutes}${hours >= 11 ? "pm" : "am"}, ${getNameMonth(month)} ${dayMonth}`


    return result;
}