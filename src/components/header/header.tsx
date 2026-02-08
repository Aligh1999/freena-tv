import { Link } from "react-router";
import MenuBtn from "./menu/menu";

const Header = () => {
    return (
        <div className="m-container">
            <div className="flex items-center gap-8 pt-8">
                <MenuBtn />

                <hr className="border-t-2 border-dashed border-white/10 grow" />

                <div className="relative">
                    <Link
                        className="size-22 bg-[linear-gradient(0,#1C1C1C_5.4%,#00275B_94.81%)] rounded-2xl border-y-2 border-white/10 rotate-45 block"
                        to="/"
                    />

                    <Link
                        to="/"
                        className="fit-cover p-4 fit-center"
                    >
                        <img
                            src="/images/logo/1.png"
                            width={375}
                            height={227}
                            className="w-full"
                            alt="فرینا TV"
                        />
                    </Link>
                </div>

                <hr className="border-t-2 border-dashed border-white/10 grow" />

                <button
                    type="button"
                    className="text-sm flex items-center gap-2 hover:bg-white/5 p-2 transition-colors rounded-lg"
                >
                    <span>جستجو...</span>

                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-auto">
                        <path d="M10 2.875H7C6.795 2.875 6.625 2.705 6.625 2.5C6.625 2.295 6.795 2.125 7 2.125H10C10.205 2.125 10.375 2.295 10.375 2.5C10.375 2.705 10.205 2.875 10 2.875Z" fill="white" />
                        <path d="M8.5 4.375H7C6.795 4.375 6.625 4.205 6.625 4C6.625 3.795 6.795 3.625 7 3.625H8.5C8.705 3.625 8.875 3.795 8.875 4C8.875 4.205 8.705 4.375 8.5 4.375Z" fill="white" />
                        <path d="M5.75 10.875C2.925 10.875 0.625 8.575 0.625 5.75C0.625 2.925 2.925 0.625 5.75 0.625C5.955 0.625 6.125 0.795 6.125 1C6.125 1.205 5.955 1.375 5.75 1.375C3.335 1.375 1.375 3.34 1.375 5.75C1.375 8.16 3.335 10.125 5.75 10.125C8.165 10.125 10.125 8.16 10.125 5.75C10.125 5.545 10.295 5.375 10.5 5.375C10.705 5.375 10.875 5.545 10.875 5.75C10.875 8.575 8.575 10.875 5.75 10.875Z" fill="white" />
                        <path d="M11.0002 11.375C10.9052 11.375 10.8102 11.34 10.7352 11.265L9.73521 10.265C9.59021 10.12 9.59021 9.87997 9.73521 9.73497C9.88021 9.58997 10.1202 9.58997 10.2652 9.73497L11.2652 10.735C11.4102 10.88 11.4102 11.12 11.2652 11.265C11.1902 11.34 11.0952 11.375 11.0002 11.375Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Header;