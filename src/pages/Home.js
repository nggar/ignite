import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
// components
import Game from '../components/Game';

const Home = () => {
    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    // get the data
    const { popular, newGames, upcoming } = useSelector((state) => state.games);

    return (
        <GameList>
            <h2>Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 5rem 3rem;
`;

export default Home;