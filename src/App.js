// Pages & Components
import SmoothScroll from './components/utils/SmoothScroll';
import Home from './pages/Home';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
    return (
        <div className="App">
            <SmoothScroll />
            <GlobalStyle />
            <Home />
        </div>
    );
}

export default App;
