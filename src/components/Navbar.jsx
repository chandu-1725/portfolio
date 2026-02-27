import { NavLink } from "react-router-dom";

function Navbar() {
    const linkStyle = ({ isActive }) => ({
        color: isActive ? "#38bdf8" : "white",
        textDecoration: "none",
        fontWeight: isActive ? "bold" : "normal",
        transition: "0.3s"
    });

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                position: "sticky",
                top: 0,
                zIndex: 1000

            }}
        >
            <h2>K.CHANDU</h2>

            <div style={{ display: "flex", gap: "25px" }}>
                <NavLink to="/" style={linkStyle}>
                    Home
                </NavLink>

                <NavLink to="/about" style={linkStyle}>
                    About
                </NavLink>

                <NavLink to="/projects" style={linkStyle}>
                    Projects
                </NavLink>
                <NavLink to="/skills" style={linkStyle}>
                    Skills
                </NavLink>
                <NavLink to="/github" style={linkStyle}>
                    GitHub
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;