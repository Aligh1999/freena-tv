import ExtraBoxPortal from "components/shared/extraBoxPortal";
import moment from "moment-jalaali";
import { useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import { nowTimestamp } from "utils";

const NAVS = [
    {
        link: "/",
        title: "پخش زنده"
    },
    {
        link: "/",
        title: "اخبار مناطق ویژه"
    },
    {
        link: "/",
        title: "اخبار مناطق آزاد"
    },
    {
        link: "/",
        title: "چند رسانه ای"
    },
    {
        link: "/",
        title: "درباره ما"
    },
    {
        link: "/",
        title: "تماس با ما"
    }
]

const Inner = () => {
    const [searchParams] = useSearchParams();
    const nodeRef = useRef<HTMLDivElement | null>(null);

    return (
        <ExtraBoxPortal selector="#extra-box">
            <CSSTransition
                nodeRef={nodeRef}
                timeout={1000}
                unmountOnExit={true}
                in={searchParams.has("menu")}
                appear={true}
            >
                <div
                    className="bg-[#09314B] fixed top-0 left-0 w-full h-full menu-anim z-11 flex flex-col items-stretch justify-center bg-[url('/images/globe-dot.png')] bg-no-repeat bg-center"
                    ref={nodeRef}
                >
                    <div className="min-h-0 overflow-auto dir-ltr py-16">
                        <div className="flex flex-col-reverse lg:flex-row justify-center items-center dir-rtl">
                            <div className="flex-1 basis-0">
                                <img
                                    src="/images/logo/1.png"
                                    width={375}
                                    height={227}
                                    className="max-w-52 lg:max-w-sm w-full mx-auto"
                                    alt="فرینا TV"
                                />
                            </div>

                            <div className="flex-1 basis-0 flex flex-col items-center gap-4 lg:border-r-2 border-dashed border-white/15">
                                <form>
                                    <div className="bg-[#082D45] flex items-stretch rounded-xl overflow-hidden border-2 border-transparent focus-within:border-white/10 transition-colors">
                                        <input
                                            type="text"
                                            className="p-4 text-sm placeholder:text-white/80"
                                            placeholder="جستجو در کل سایت ..."
                                        />

                                        <button
                                            type="button"
                                            className="fit-center hover:bg-black/10 px-4 transition-colors"
                                        >
                                            <i className="fa-regular fa-magnifying-glass" />
                                        </button>
                                    </div>
                                </form>

                                <div className="flex items-center bg-[#011B2A] text-sm rounded-lg p-4 gap-2">
                                    <i className="fa-light fa-calendar-lines" />
                                    <span>
                                        <b>امروز</b> {moment.unix(nowTimestamp()).format("dddd jDD jMMMM jYYYY")} | سال تولید، دانش بنیان، اشتغال آفرینی
                                    </span>
                                </div>

                                <ul className="text-center">
                                    {
                                        NAVS.map((nav, i: number) => (
                                            <li
                                                key={`number-${i}`}
                                                className="group"
                                            >
                                                <Link
                                                    to={nav.link}
                                                    className="py-4 px-8 border-b border-dashed border-white/10 block group-last:border-0 hover:opacity-80 transition-opacity"
                                                >
                                                    {nav.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </CSSTransition>
        </ExtraBoxPortal>
    )
}

export default Inner;