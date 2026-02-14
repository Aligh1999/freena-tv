import { Link } from "react-router";
import { FOOTER_NAVS } from "./navs";

const Footer = () => {
    return (
        <footer>
            <div className="border-t border-white/15 rounded-t-4xl">
                <div className="py-12">
                    <div className="size-22 mx-auto relative fit-center group cursor-pointer">
                        <div className="fit-cover">
                            <div className="bg-linear-to-tr from-black to-[#0A203B] w-full h-full rotate-45 rounded-2xl border-y-2 border-white/30" />
                        </div>

                        <div className="size-10 rounded-full bg-white relative text-gray-800 fit-center text-sm transition-all group-hover:translate-y-1 group-hover:opacity-80">
                            <i className="fa-solid fa-arrow-up" />
                        </div>
                    </div>
                </div>

                <div className="m-container">
                    <div className="flex items-center gap-4 flex-col xl:flex-row border-b-2 border-dashed pb-8 border-white/15 mb-8">
                        <Link
                            to="/"
                            className="w-28 h-auto"
                        >
                            <img
                                src="/images/logo/1.png"
                                width={375}
                                height={227}
                                alt=""
                            />
                        </Link>

                        <div className="grow min-w-0 bg-white/10 rounded-2xl xl:rounded-full p-4">
                            <ul className="flex items-center flex-wrap gap-4 text-sm [&_i]:text-xs justify-center xl:justify-start">
                                <li className="flex items-center gap-1">
                                    <i className="fa-solid fa-location-dot" />
                                    <p className="opacity-70">تهران خیابان ولیعصر بالاتر از ظفر بلوار اسفندیار پلاک 51</p>
                                </li>

                                <li className="flex items-center gap-1">
                                    <i className="fa-solid fa-phone" />

                                    <span className="opacity-70">
                                        <span>شماره تماس: </span>

                                        <a href="tel:+9821-75207000" className="dir-ltr text-right inline-block">
                                            021-75207000
                                        </a>
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <i className="fa-solid fa-fax" />

                                    <span className="opacity-70">
                                        <span>شماره فکس: </span>

                                        <a href="tel:+9821-75207000" className="dir-ltr text-right inline-block">
                                            021-75207000
                                        </a>
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <i className="fa-solid fa-envelope" />

                                    <span className="opacity-70">
                                        <span>پست الکترونیک: </span>

                                        <a href="mailto:publicrelations@freena.ir" className="dir-ltr text-right inline-block">
                                            publicrelations@freena.ir
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 items-start gap-y-6 gap-x-4">
                        {
                            FOOTER_NAVS.map((sec, i) => (
                                <div
                                    key={`sec-${i}`}
                                    className="border-b border-dashed border-white/20 pb-6 last:border-0 xl:border-0 xl:pb-0"
                                >
                                    <div className={sec.class}>
                                        <b className="font-extrabold block mb-6">
                                            {sec.title}
                                        </b>

                                        <ul className="grid grid-cols-2 gap-4 text-sm">
                                            {
                                                sec.navs.map((nav, j) => (
                                                    <li
                                                        key={`sec-${i}-${j}`}
                                                        className={nav.class || ""}
                                                    >
                                                        <Link
                                                            to={nav.link}
                                                            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                                                        >
                                                            <i className="fa-solid fa-caret-left text-[.5rem]" />
                                                            {nav.title}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-16">
                    <div className="bg-[#001826] text-center dir-ltr py-4">
                        <div className="m-container">
                            <b className="eng-number font-semibold">
                                copyright  2024 freena.ir. all rights reserved.
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;