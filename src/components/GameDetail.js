import { useNavigate } from 'react-router-dom';
// styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';

const GameDetail = () => {
    const navigate = useNavigate();
    // exit game detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    };
    // detail data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
        <>
            {isLoading === false && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={game.background_image} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
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
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background-color: white;

    position: absolute;
    left: 10%;
    color: #333;

    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;
