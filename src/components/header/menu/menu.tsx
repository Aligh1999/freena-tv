import Inner from "./inner";
import { useLocation, useNavigate } from "react-router";

const MenuBtn = () => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const toggleHandler = () => {
        navigate(`${pathname}${search}`, { state: "menu" });
    }

    return (
        <>
            <button
                type="button"
                className="size-12 text-xl fit-center hover:bg-white/5 transition-colors rounded-lg"
                onClick={toggleHandler}
            >
                <i className="fa-regular fa-bars-sort fa-flip-horizontal" />
            </button>

            <Inner />
        </>
    )
}

export default MenuBtn;