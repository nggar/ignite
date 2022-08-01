import axios from 'axios';
import { getPopularGamesUrl } from '../api';

// Action creator
export const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const popularGames = await axios.get(getPopularGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGames.data.results,
        },
    });
};
