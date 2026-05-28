interface ButtonGroupProps {
    children: React.ReactNode;
    position?: "absolute" | "relative";
    id?: string;
    style?: React.CSSProperties;
}

function ButtonGroup({ children, position, id, style }: ButtonGroupProps) {
    return (
        <div id={id} className="center" style={{
            position: position,
            display: "flex",
            gap: "10px",
            ...style
        }}>
            {children}
        </div>
    )
}
export default ButtonGroup;