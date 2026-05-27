import React from "react";

interface InputProps {
    placeholder: string;
    type: string;
    name?: string;
    required: boolean;
    style?: React.CSSProperties;
}

function Input({ placeholder, required, type, name, style }: InputProps) {

    const [showPassword, setShowPassword] = React.useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <div className="input">
            <input type={inputType} placeholder="" required={required} name={name} id={name} style={{...style}} />
            <label htmlFor={name}>{placeholder}</label>
            <span className="center" 
                style={type==="password" ? {display:"flex", zIndex:"2", opacity:showPassword?"1":"0.6"} : {display:"none"}}
                onClick={() => {setShowPassword(!showPassword);}}>
                <img style={{width:"50%", height:"50%"}} src="src/assets/icon/eye.svg" alt="Eye" />
            </span>
        </div>   
    )
}
export default Input;