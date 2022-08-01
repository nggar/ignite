import axios from 'axios';
import {
    getPopularGamesUrl,
    getUpcomingGamesUrl,
    getNewGamesUrl,
} from '../api';

// Action creator
export const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const popularGames = await axios.get(getPopularGamesUrl());
    const newGames = await axios.get(getNewGamesUrl());
    const upcomingGames = await axios.get(getUpcomingGamesUrl());

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGames.data.results,
            upcoming: upcomingGames.data.results,
            newGames: newGames.data.results,
        },
    });
};
