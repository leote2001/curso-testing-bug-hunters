import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/sprint-1"}>Sprint 1</Link></li>
                    <li><Link to={"/sprint-2"}>Sprint 2</Link></li>
                </ul>
            </nav>
        </>
    );
}