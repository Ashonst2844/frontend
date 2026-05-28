interface containerProps {
    w: string;
    h: string;
    id?: string;
    children: React.ReactNode;
}

function Container({w,h,id,children}: containerProps) {
    return (
        <div className="container center" style={{width:w, height:h}} id={id}>
            {children}
        </div>
    )
}
export default Container;