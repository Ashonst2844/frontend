import { Link } from "react-router-dom";

interface ButtonProps {
    link?: string;
    state?: unknown;
    children: React.ReactNode;
    w: string;
    h: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type: "primary" | "secondary" | "back-button";
}

function Button({ w, h, link, state, children, onClick, style, type }: ButtonProps) {
    return (
        <Link 
            className={`center button ${
                type === "primary" ? "background-gradient" : 
                type === "secondary" ? "background-border" : "back-button background-gradient"
            }`} 
            to={link}
            state={state}
            style={{ width: w, height: h, ...style }}
            onClick={onClick}>
            {children}
        </Link>
    )
}
export default Button;