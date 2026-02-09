import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";
import { CSSTransition } from "react-transition-group";
import ExtraBoxPortal from "components/shared/extraBoxPortal";
import Inner from "./inner";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { IRootState } from "redux/store";

const MenuBtn = () => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    const stackHistory = useSelector((state: IRootState) => state.app.stackHistory);
    const show = stackHistory[0] === "menu";

    useEffect(() => {
        const el = document.querySelector("#root");
        invariant(el);

        if (show)
            el.classList.add("translate-x-1/2");
        else
            el.classList.remove("translate-x-1/2");
    }, [show])

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

            <ExtraBoxPortal selector="#extra-box">
                <CSSTransition
                    nodeRef={nodeRef}
                    timeout={800}
                    unmountOnExit={true}
                    in={show}
                >
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 anim-c1 transition-opacity duration-800"
                        ref={nodeRef}
                    />
                </CSSTransition>
            </ExtraBoxPortal>

            <Inner />
        </>
    )
}

export default MenuBtn;