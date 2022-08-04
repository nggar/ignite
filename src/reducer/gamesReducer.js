const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};
const gamesReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popular: actions.payload.popular,
                newGames: actions.payload.newGames,
                upcoming: actions.payload.upcoming,
            };
        case 'FETCH_SEARCH':
            return {
                ...state,
                searched: actions.payload.search,
            };
        case 'CLEAR_SEARCH':
            return {
                ...state,
                searched: [],
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
