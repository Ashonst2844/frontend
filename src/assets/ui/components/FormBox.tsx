interface FormBoxProps {
    action?: string;
    method?: "GET" | "POST";
    children: React.ReactNode;
}

function FormBox({ action, method, children }: FormBoxProps) {
    return (
        <form action={action} method={method} style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
            {children}
        </form>
    )
}
export default FormBox;