import {Link} from "react-router-dom";

const Header  = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact="true" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;