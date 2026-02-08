import { useRef, useState } from "react";
import invariant from "tiny-invariant";
import { CSSTransition } from "react-transition-group";
import ExtraBoxPortal from "components/shared/extraBoxPortal";

const MenuBtn = () => {
    const [show, setShow] = useState(false);
    const nodeRef = useRef<HTMLDivElement | null>(null);

    const toggleHandler = () => {
        const el = document.querySelector("#root");
        invariant(el);

        if (show) {

        } else {
            el.classList.add("translate-x-1/2");
            setShow(true);
        }
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
                    timeout={500}
                    unmountOnExit={true}
                    in={show}
                >
                    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 anim-c1 transition-opacity delay-500" />
                </CSSTransition>
            </ExtraBoxPortal>
        </>
    )
}

export default MenuBtn;