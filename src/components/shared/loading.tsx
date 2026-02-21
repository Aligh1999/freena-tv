import { twMerge } from "tailwind-merge";

export const Spinner = ({ className }: { className?: string }) => (
    <i className={twMerge("fa-solid fa-spinner-third spin", className)} />
)

export const DotLoading = (props: {
    className?: string,
    center?: boolean
}) => {
    const {
        center = true,
        className = "c1"
    } = props;

    return (
        <div className={center ? "fit-center" : ""}>
            <div className={`lds-ellipsis ${className}`}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}