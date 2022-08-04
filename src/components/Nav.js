import { useState } from 'react';
// Styles
import { motion } from 'framer-motion';
import styled from 'styled-components';
// logo
import logo from '../images/logo.svg';
// Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
    };

    const clearSearch = () => {
        dispatch({ type: 'CLEAR_SEARCH' });
    };

    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form onSubmit={submitSearch}>
                <div className="search">
                    <input onChange={inputHandler} type="text" />
                    <button type="submit">Search</button>
                </div>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    .search {
        display: flex;
        height: 3rem;
        align-items: center;
        justify-content: center;
    }
    input {
        width: 30rem;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: none;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        height: 100%;
    }
    button {
        font-size: 1.2rem;
        cursor: pointer;
        background-color: #ff7676;
        padding: 0 2rem;
        border: none;
        height: 100%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        color: white;
    }
`;
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    h1 {
        margin-left: 0.3rem;
    }
    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;
