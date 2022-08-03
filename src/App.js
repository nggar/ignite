// Pages & Components
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/utils/SmoothScroll';
import Home from './pages/Home';
import GameDetail from './components/GameDetail';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
    return (
        <div className="App">
            <SmoothScroll />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="game/:id" element={<GameDetail />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
