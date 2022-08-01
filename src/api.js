// Base Url
const base_url = 'https://api.rawg.io/api/';

// Get current month
function getCurrentMonth() {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}
// Get current Date
function getCurrentDate() {
    const date = new Date().getDate();
    if (date < 10) {
        return `0${date}`;
    } else {
        return date;
    }
}
// Current Year-Month-Date
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDate()}`;
// last and next year
const lastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDate()}`;
const nextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDate()}`;

// get games by ratings
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const getPopularGamesUrl = () => `${base_url}${popular_games}`;
