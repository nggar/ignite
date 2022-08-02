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
// Get current day
function getCurrentDay() {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}
// Current Year-Month-Day
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
// last and next year
const lastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

// get popular games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const getPopularGamesUrl = () => `${base_url}${popular_games}`;
// get upcoming games
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const getUpcomingGamesUrl = () => `${base_url}${upcoming_games}`;
// get new games
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-realised&page_size=10`;
export const getNewGamesUrl = () => `${base_url}${newGames}`;

// get game details
export const getGamesDetailUrl = (games_id) =>
    `${base_url}games/${games_id}?key=${process.env.REACT_APP_RAWG_API}`;
// get game screenshots
export const getGamesScreenshot = (games_id) =>
    `${base_url}games/${games_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
