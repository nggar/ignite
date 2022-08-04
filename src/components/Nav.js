// Styles
import { motion } from 'framer-motion';
import styled from 'styled-components';
// logo
import logo from '../images/logo.svg';

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
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
