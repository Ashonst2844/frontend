interface PagesProps {
    children: React.ReactNode;
    id: string;
    className?: string;
    style?: React.CSSProperties;
}

function Pages({children, id, className, style}: PagesProps) {
    return (
        <div className={`${className} pages`} id={id} style={{...style}}>
            {children}
        </div>
    )
}
export default Pages;