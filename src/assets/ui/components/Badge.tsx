import type React from "react";

interface BadgeProps {
    text?: React.ReactNode;
    icon?: React.ReactNode;
    w?: string;
    h?: string;
    title?: string;
}

function Badge({ text, icon, w, h, title }: BadgeProps) {
    return (
        <div className="center background-border" style={{width:w, height:h, borderRadius:"50%"}} title={title}>
            {icon}
            {text}
        </div>
    )
}
export default Badge;