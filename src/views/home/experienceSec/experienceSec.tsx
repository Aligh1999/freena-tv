import { Swiper, SwiperSlide } from "swiper/react";
import style from "./experienceSec.module.css";
import { Link } from "react-router";

const ExperienceSec = () => {
    return (
        <div className="pt-16 bg-[url(/images/globe.png)] bg-no-repeat bg-top-left overflow-hidden relative">
            <div className="start-circle absolute left-0 bottom-0 opacity-30" />

            <div className="m-container">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 relative mb-8">
                    <div className={`${style.titleBlur} w-sm aspect-square absolute right-0 top-0 translate-x-1/2 -translate-y-32 opacity-30`} />

                    <h2 className="text-xl font-extrabold">تجربه</h2>
                    <span className="text-sm">از سواحل تا بازارها؛ کشف دنیای مناطق آزاد</span>
                </div>

                <div className="flex-col-reverse lg:flex-row bg-[#161616] rounded-3xl flex lg:items-center relative">
                    <div className="lg:w-112.5 p-8 lg:min-w-112.5 h-150">
                        <Swiper
                            direction="vertical"
                            slidesPerView={5}
                            spaceBetween={16}
                            className="h-full"
                            slidePrevClass="slide-prev"
                            slideNextClass="slide-next"
                            slideActiveClass="slide-active"
                            slideToClickedSlide
                            breakpoints={{
                                1024: {
                                    centeredSlides: true
                                }
                            }}
                        >
                            {
                                [...Array(10)].map((_, i) => (
                                    <SwiperSlide
                                        key={`slide-${i}`}
                                        className="group scale-70 opacity-15 transition-all! [.slide-prev,.slide-next]:opacity-40 [.slide-prev,.slide-next]:scale-85 [.slide-active]:opacity-100 [.slide-active]:scale-100"
                                    >
                                        <div className="pl-6 h-full relative cursor-pointer">
                                            <div className={`p-px rounded-2xl h-full ${style.slideBorder} group-not-[.slide-active]:bg-transparent!`}>
                                                <div className="bg-[#1d1d1d] h-full rounded-2xl flex items-center justify-center p-4 pl-8">
                                                    <h5 className="line-clamp-2 group-[.slide-active]:font-semibold leading-8 text-center">
                                                        بازدید دبیرشورایعالی مناطق آزاد از پاویون اختصاصی مناطق  آزاد در ششمین نمایشگاه بین المللی حمل و نقل،لجستیک و صنایع وابسته
                                                    </h5>
                                                </div>
                                            </div>

                                            <div className="absolute top-1/2 left-2 w-8 h-8 rounded-2xl items-center justify-center -translate-y-1/2 hidden group-[.slide-active]:flex">
                                                <div className="fit-cover bg-primary rotate-45 rounded-md group-hover:rotate-0 transition-transform" />
                                                <i className="fa-light fa-chevron-left relative text-xs" />
                                            </div>

                                            <Link
                                                to="/"
                                                className="fit-cover hidden group-[.slide-active]:block"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    <div className="grow min-w-0 p-4 relative">
                        <div className="absolute top-0 right-0 w-1/4 h-full rounded-2xl bg-white/3 border border-white/10 hidden lg:block" />

                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/temp/10.jpg"
                                width={875}
                                height={500}
                                className="w-full h-auto"
                            />

                            <div className="bg-linear-to-t from-black to-transparent fit-cover fit-center">
                                <div className="size-14 fit-center relative">
                                    <div className="fit-cover backdrop-blur-md rounded-2xl border-y-2 border-white/70 rotate-45" />
                                    <i className="fa-solid fa-play relative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSec;