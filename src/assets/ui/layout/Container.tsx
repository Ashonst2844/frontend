interface containerProps {
    w: string;
    h: string;
    id?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

function Container({w,h,id,children,style,className}: containerProps) {
    return (
        <div className={`container ${className}`} style={{width:w, height:h, ...style}} id={id}>
            {children}
        </div>
    )
}
export default Container;