import { useNavigate } from 'react-router-dom';
// styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
// functions
import { smallImage } from '../util';
// Images
import playStation from '../images/playstation.svg';
import steam from '../images/steam.svg';
import apple from '../images/apple.svg';
import gamepad from '../images/gamepad.svg';
import nintendo from '../images/nintendo.svg';
import xbox from '../images/xbox.svg';
import starEmpty from '../images/star-empty.png';
import starFull from '../images/star-full.png';

const GameDetail = ({ pathId }) => {
    const navigate = useNavigate();

    // exit game detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    };

    // get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case 'PlayStation 4':
                return playStation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    };

    // get stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={starFull} alt="star" key={i} />);
            } else {
                stars.push(<img src={starEmpty} alt="empty star" key={i} />);
            }
        }
        return stars;
    };

    // detail data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
        <>
            {isLoading === false && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>
                                    {game.name}
                                </motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(
                                                data.platform.name
                                            )}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={smallImage(game.background_image, 1280)}
                                alt={game.name}
                            />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img
                                    key={screen.id}
                                    src={smallImage(screen.image, 1280)}
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

    .rating {
        img {
            display: inline-block;
            width: 1.5rem;
        }
    }
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
