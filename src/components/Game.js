import { Link } from 'react-router-dom';
// Styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { loadDetail } from '../actions/detailAction';
import { useDispatch } from 'react-redux';
// functions
import { smallImage } from '../util';

const Game = ({ name, released, image, id }) => {
    // convert id to string
    const stringId = id.toString();

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    };
    return (
        <StyledGame layoutId={stringId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringId}`}
                    src={smallImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;
export default Game;
