import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./videoSlider.module.css";

const VideoSlider = () => {
    const [activeIndex] = useState(1);

    return (
        <div className="pb-24 bg-[url(/images/globe.png)] bg-bottom-right bg-no-repeat">
            <div className="p-3 lg:p-6 relative">
                <div className="bg-white/3 border border-white/10 backdrop-blur-sm absolute top-0 right-0 w-full h-1/2 rounded-2xl" />

                <div className="bg-[#161616] relative rounded-t-2xl p-4 lg:p-0">
                    <div className="lg:m-container">
                        <div className="flex flex-1 gap-0 lg:gap-8 flex-col-reverse lg:flex-row pt-22 sm:pt-16 lg:pt-0">
                            <div className="py-12 flex-1 basis-0">
                                <div className="flex items-start sm:items-center gap-2 mb-16 absolute top-0 right-0 lg:relative px-4 py-6 lg:p-0 flex-col sm:flex-row">
                                    <h2 className="text-xl font-extrabold">فرصت های سرمایه گذاری</h2>
                                    <span className="text-sm">از سواحل تا بازارها؛ کشف دنیای مناطق آزاد</span>
                                </div>

                                <ul>
                                    {
                                        [
                                            "گام بلند منطقه ویژه اقتصادی سلفچگان برای تبدیل شدن به مقصد امن سرمایه گذاری خارجی",
                                            "تاسیس بندر گاه جدید چابهار برای توسعه ارتباط بین ایران و عمان و هند",
                                            "نمایش توانمندی ها و فرصت های سرمایه گذاری مناطق آزاد در رویداد کیش اینوکس",
                                            "رشد 300 درصدی سرمایه گذاری داخلی و بازگشت 243 هکتار زمین به منطقه آزاد کیش",
                                            "منطقه ویژه اقتصادی شیراز، موتور توسعه صنعتی و سرمایه گذاری جنوب کشود",
                                        ].map((title, i) => {
                                            const isActive = activeIndex === i;

                                            return (
                                                <li
                                                    className={twMerge("rounded-xl border border-white/15 flex items-center gap-4 p-4 mb-4 last:mb-0 text-sm cursor-pointer hover:bg-white/3 transition-colors relative overflow-hidden", isActive && "bg-primary! border-primary")}
                                                    key={`item-${i}`}
                                                >
                                                    <div className={twMerge("w-1 h-8 rounded-l-3xl absolute right-0 top-1/2 -translate-y-1/2 bg-white translate-x-full transition-transform", isActive && "translate-x-0")} />

                                                    <div className="size-8 min-w-8 rounded-full bg-white shadow-[0_0_20px_white] fit-center text-gray-700 text-xs pl-px">
                                                        <i className="fa-solid fa-play" />
                                                    </div>

                                                    <p className={isActive ? "font-bold" : ""}>
                                                        {title}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="relative flex-1 basis-0">
                                <div className="lg:fit-cover">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        breakpoints={{
                                            1024: {
                                                slidesPerView: 1.75
                                            }
                                        }}
                                        direction="vertical"
                                        className="h-96 lg:h-full"
                                        centeredSlides
                                    >
                                        {
                                            [...Array(4)].map((_, i) => (
                                                <SwiperSlide
                                                    key={`slide-${i}`}
                                                    className="group"
                                                >
                                                    <div className="h-full relative blur-xl scale-80 no-select opacity-50 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:blur-none transition-all group-[.swiper-slide-active]:opacity-100 rounded-3xl overflow-hidden">
                                                        <img src="/temp/7.png" className="w-full h-full object-cover" />

                                                        <div className={`fit-cover fit-center ${style.lightboxBg}`}>
                                                            <button
                                                                type="button"
                                                                className="rounded-2xl size-14 backdrop-blur-md bg-white/10 text-xl fit-center"
                                                            >
                                                                <i className="fa-solid fa-play" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`h-16 rounded-b-2xl ${style.btmGradient}`} />
            </div>
        </div>
    )
}

export default VideoSlider;