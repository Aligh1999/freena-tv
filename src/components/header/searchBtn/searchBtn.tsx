import PrimaryBtn from "components/shared/primaryBtn";
import { useRef, useState, type SubmitEventHandler } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import type { IRootState } from "redux/store";

const SearchBtn = () => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    const stackHistory = useSelector((state: IRootState) => state.app.stackHistory);
    const show = stackHistory[0] === "search";
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [inputVal, setInputVal] = useState("");

    const submitHandler: SubmitEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        navigate(`/videos?text=${inputVal}`);
    }

    return (
        <>
            <button
                type="button"
                className="text-sm flex items-center gap-2 hover:bg-white/5 p-2 transition-colors rounded-lg"
                onClick={() => {
                    navigate(`${pathname}${search}`, { state: "search" });
                }}
            >
                <span>جستجو...</span>

                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-auto">
                    <path d="M10 2.875H7C6.795 2.875 6.625 2.705 6.625 2.5C6.625 2.295 6.795 2.125 7 2.125H10C10.205 2.125 10.375 2.295 10.375 2.5C10.375 2.705 10.205 2.875 10 2.875Z" fill="white" />
                    <path d="M8.5 4.375H7C6.795 4.375 6.625 4.205 6.625 4C6.625 3.795 6.795 3.625 7 3.625H8.5C8.705 3.625 8.875 3.795 8.875 4C8.875 4.205 8.705 4.375 8.5 4.375Z" fill="white" />
                    <path d="M5.75 10.875C2.925 10.875 0.625 8.575 0.625 5.75C0.625 2.925 2.925 0.625 5.75 0.625C5.955 0.625 6.125 0.795 6.125 1C6.125 1.205 5.955 1.375 5.75 1.375C3.335 1.375 1.375 3.34 1.375 5.75C1.375 8.16 3.335 10.125 5.75 10.125C8.165 10.125 10.125 8.16 10.125 5.75C10.125 5.545 10.295 5.375 10.5 5.375C10.705 5.375 10.875 5.545 10.875 5.75C10.875 8.575 8.575 10.875 5.75 10.875Z" fill="white" />
                    <path d="M11.0002 11.375C10.9052 11.375 10.8102 11.34 10.7352 11.265L9.73521 10.265C9.59021 10.12 9.59021 9.87997 9.73521 9.73497C9.88021 9.58997 10.1202 9.58997 10.2652 9.73497L11.2652 10.735C11.4102 10.88 11.4102 11.12 11.2652 11.265C11.1902 11.34 11.0952 11.375 11.0002 11.375Z" fill="white" />
                </svg>
            </button>

            <CSSTransition
                in={show}
                timeout={300}
                unmountOnExit
                nodeRef={nodeRef}
            >
                <div
                    className="fixed left-0 top-0 w-full h-full z-20 flex flex-col items-center justify-center p-8 search-box-anim"
                    ref={nodeRef}
                >
                    <div
                        className="fit-cover backdrop-blur-sm bg-black/10 c1"
                        onClick={() => navigate(-1)}
                    />

                    <div className="w-full max-w-lg rounded-2xl min-h-0 bg-linear-to-tr from-blue-950 to-blue-900 overflow-auto relative dir-ltr shadow-[0_0_0_10px_rgba(255,255,255,.1)] border-white/10 c2">
                        <div className="dir-rtl p-8">
                            <button
                                type="button"
                                className="absolute left-0 top-0 size-10 fit-center text-sm opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <i className="fa-regular fa-xmark" />
                            </button>

                            <form onSubmit={submitHandler}>
                                <span className="text-sm">
                                    عبارت مورد نظر را جستجو نمایید:
                                </span>

                                <input
                                    type="text"
                                    className="field-c1 my-4"
                                    placeholder="وارد نمایید ..."
                                    autoFocus
                                    autoComplete="off"
                                    onChange={e => setInputVal(e.target.value)}
                                />

                                <PrimaryBtn
                                    type="submit"
                                >
                                    جستجو
                                </PrimaryBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default SearchBtn;