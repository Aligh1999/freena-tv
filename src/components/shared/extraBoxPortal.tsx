import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
    selector: string,
    children: React.ReactNode
}

const ExtraBoxPortal = (props: IProps) => {
    const { children, selector } = props;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [])

    return mounted ? createPortal(children, document.querySelector(selector) as HTMLInputElement) : null;
}

export default ExtraBoxPortal