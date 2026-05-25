interface PagesProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

function Pages({children, id, className}: PagesProps) {
    return (
        <div className={`${className} pages`} id={id}>
            {children}
        </div>
    )
}
export default Pages;