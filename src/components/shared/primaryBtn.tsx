import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./loading";

interface IProps {
    children: ReactNode,
    type?: "button" | "submit",
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    onClick?: () => void
}

const PrimaryBtn = (props: IProps) => {
    const {
        children,
        type = "button",
        className,
        loading,
        disabled,
        onClick = () => { }
    } = props;

    return (
        <button
            type={type}
            className={twMerge("p-4 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors w-full block text-sm font-bold relative overflow-hidden", className)}
            disabled={loading || disabled}
            onClick={onClick}
        >
            {children}

            {
                !!loading && (
                    <span className="fit-cover fit-center bg-primary-dark">
                        <Spinner />
                    </span>
                )
            }
        </button>
    )
}

export default PrimaryBtn;