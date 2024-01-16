import { Link } from "react-router-dom";

export default function Nav () {
    return (
            <nav>
                <Link className="logo" to="/">Haden&#39;s Media Log</Link>
                <Link className="about-button" to="/about">About</Link>
            </nav>
    ) 
}