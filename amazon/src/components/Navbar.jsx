import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
    return (
        <nav className="navbar">
            <h2>E-Commerce Viewer</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart" className="cart-link">
                    <span className="cart-count">{cart.length}</span>
                </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;