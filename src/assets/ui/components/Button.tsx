import { Link } from "react-router-dom";

interface ButtonProps {
    link?: string;
    state?: unknown;
    className?: string;
    children: React.ReactNode;
    w: string;
    h: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type: "primary" | "secondary" | "back-button" | "danger";
}

function Button({ w, h, link, state, children, onClick, style, type, className }: ButtonProps) {
    const buttonClass = `center button ${className} ${
        type === "primary" ? "background-gradient" : 
        type === "secondary" ? "background-border" :
        type === "back-button" ? "back-button background-gradient" : "background-danger"
    }`;
    
    const buttonStyle = { width: w, height: h, ...style };
    
    // Jika ada link, gunakan Link component, jika tidak gunakan button element
    if (link) {
        return (
            <Link 
                className={buttonClass}
                to={link}
                state={state}
                style={buttonStyle}
                onClick={onClick}>
                {children}
            </Link>
        );
    }
    
    return (
        <button 
            className={buttonClass}
            style={buttonStyle}
            onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;