// styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';

const GameDetail = () => {
    // detail data
    const { screen, game } = useSelector((state) => state.detail);
    return (
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map((platform) => (
                                <h3 key={platform.platform.id}>
                                    {platform.platform.name}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.name} />
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.results.map((screen) => (
                        <img
                            key={screen.id}
                            src={screen.image}
                            alt="screenshot"
                        />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    left: 0;
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 10rem;
    background-color: white;

    position: absolute;
    left: 10%;
    color: #333;

    img {
        width: 100%;
    }
`;

export default GameDetail;
