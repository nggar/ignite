import axios from 'axios';
import { getGamesDetailUrl } from '../api';
import { getGamesScreenshot } from '../api';

export const loadDetail = (id) => async (dispacth) => {
    const detailGame = await axios.get(getGamesDetailUrl(id));
    const screenshotGame = await axios.get(getGamesScreenshot(id));

    dispacth({
        type: 'GET_DETAIL',
        payload: {
            game: detailGame.data,
            screen: screenshotGame.data,
        },
    });
};
