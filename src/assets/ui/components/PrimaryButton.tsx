import type React from "react";

interface ButtonProps {
    link: string;
    children: React.ReactNode;
    w: string;
    h: string;
}

function PrimaryButton({ w, h, link, children }: ButtonProps) {
    return (
        <a 
            className="primary-button center background-gradient" 
            href={link}
            style={{ width: w, height: h }}
        >
            {children}
        </a>
    )
}
export default PrimaryButton;