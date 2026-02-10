import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VideoSlider = () => {
    const [activeIndex] = useState(1);

    return (
        <div className="p-4 relative">
            <div className="bg-white/3 border border-white/10 backdrop-blur-sm absolute top-0 right-0 w-full h-1/2 rounded-2xl" />

            <div className="bg-[#161616] relative rounded-2xl">
                <div className="m-container">
                    <div className="grid grid-cols-2 gap-8 items-stretch">
                        <div className="py-12">
                            <div className="flex items-center gap-2 mb-16">
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
                                                className={twMerge("rounded-xl border border-white/15 flex items-center gap-4 p-4 mb-4 text-sm cursor-pointer hover:bg-white/3 transition-colors relative overflow-hidden", isActive && "bg-primary! border-primary")}
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

                        <div className="relative">
                            <div className="fit-cover">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    direction="vertical"
                                    className="h-full"
                                    centeredSlides
                                >
                                    {
                                        [...Array(4)].map((_, i) => (
                                            <SwiperSlide key={`slide-${i}`}>
                                                <div className="h-full relative">
                                                    <img src="/temp/7.png" className="w-full h-full object-cover" />

                                                    <div className="fit-cover bg-[#161616]/50 backdrop-blur-lg" />
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
        </div>
    )
}

export default VideoSlider;