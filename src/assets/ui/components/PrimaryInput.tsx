interface PrimaryInputProps {
    placeholder: string;
    type: string;
    name?: string;
    required: boolean;
    style?: React.CSSProperties;
}

function PrimaryInput({ placeholder, required, type, name, style }: PrimaryInputProps) {
    return (
        <input type={type} placeholder={placeholder} required={required} name={name} style={{
            width: "100%",
            height: "40px",
            padding: "10px",
            borderRadius: "5px",
            ...style
        }} />
    )
}
export default PrimaryInput;