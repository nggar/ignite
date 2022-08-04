import { Routes, Route } from 'react-router-dom';
// Pages & Components
import Home from './pages/Home';
import GameDetail from './components/GameDetail';
import Nav from './components/Nav';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="game/:id" element={<GameDetail />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
