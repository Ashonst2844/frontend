import Button from "../components/Button";

import React from "react";

interface FloatFrameProps {
    id?: string;
    children?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
}

function FloatFrame({id, children, open, onClose}: FloatFrameProps) {
    const [openFrame, setOpenFrame] = React.useState(open || false);
    
    React.useEffect(() => {
        setOpenFrame(open || false);
    }, [open]);
    
    const handleClose = () => {
        setOpenFrame(false);
        onClose?.();
    };
    
    return (
        <div id={id} className="float-frame center" style={{display: openFrame ? "flex" : "none"}}>
            <div className="float-box center">
                <Button type="back-button" w="60px" h="60px" onClick={handleClose}>
                    <img src="../src/assets/icon/back-arrow.svg" alt="Back" />
                </Button>
                {children}
            </div>
        </div>
    )
}
export default FloatFrame;