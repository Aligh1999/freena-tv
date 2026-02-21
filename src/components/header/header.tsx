import { Link } from "react-router";
import MenuBtn from "./menu/menu";
import SearchBtn from "./searchBtn/searchBtn";

const Header = () => {
    return (
        <header>
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

                    <SearchBtn />
                </div>
            </div>
        </header>
    )
}

export default Header;