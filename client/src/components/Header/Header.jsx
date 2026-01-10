import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);

    const isAuthenticated = !!user.email;

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>

            {isAuthenticated && <span>Hi, {user.email}</span>}

            <nav>
                {!isAuthenticated ? (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                ) : (
                    <div id="user">
                        <Link to="/catalog">All games</Link>
                        <Link to="/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
