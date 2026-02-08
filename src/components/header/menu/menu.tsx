import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";
import { CSSTransition } from "react-transition-group";
import ExtraBoxPortal from "components/shared/extraBoxPortal";
import Inner from "./inner";
import { createSearchParams, useSearchParams } from "react-router";

const MenuBtn = () => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const el = document.querySelector("#root");
        invariant(el);

        if (searchParams.has("menu"))
            el.classList.add("translate-x-1/2");
        else
            el.classList.remove("translate-x-1/2");
    }, [searchParams])

    const toggleHandler = () => {
        const newParams = createSearchParams(searchParams);
        newParams.set("menu", "true");

        setSearchParams(newParams);
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
                    in={searchParams.has("menu")}
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