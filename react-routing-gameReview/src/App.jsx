import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Game from './components/Game';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">GameReview</div>
                <div className="menu-toggle" onClick={() => {
                    document.querySelector('.navbar-links').classList.toggle('show');
                }}>

                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/games">Games</Link>
                    </li>
                </ul>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:id" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
