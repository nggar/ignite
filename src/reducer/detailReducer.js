const initState = {
    game: {},
    screen: {},
};

const detailReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: actions.payload.game,
                screen: actions.payload.game,
            };
        default:
            return { ...state };
    }
};

export default detailReducer;
