const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};
const gamesReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'FETCH_GAMES':
            return { ...state, popular: actions.payload.popular };
        default:
            return { ...state };
    }
};

export default gamesReducer;