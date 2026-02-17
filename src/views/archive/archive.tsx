import Footer from "components/footer/footer";
import Header from "components/header/header";
import { useId, useState } from "react";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as ISwiper } from "swiper/types";
import 'swiper/css/effect-fade';
import VideoCard from "components/cards/videoCard/videoCard";

const SLIDES = [
    "13.jpg",
    "12.jpg",
    "11.jpg",
    "14.jpg",
    "15.jpg",
    "13.jpg",
    "12.jpg",
    "11.jpg",
    "14.jpg",
    "15.jpg",
]

const Archive = () => {
    const id = useId();
    const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null);

    return (
        <>
            <Header />

            <main>
                <section>
                    <div className="py-12">
                        <div className="m-container flex flex-col items-center gap-2">
                            <h1 className="font-extrabold text-lg">منطقه آزاد ارس</h1>
                            <p className="text-sm text-[#A7A7A7]">
                                شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                            </p>
                        </div>
                    </div>

                    <div className="bg-[url(/images/globe.png)] bg-top-left bg-no-repeat mb-8">
                        <div className="m-container">
                            <div className="bg-white/3 p-4 rounded-2xl relative">
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    modules={[Navigation, Thumbs, EffectFade]}
                                    effect="fade"
                                    thumbs={{
                                        swiper: thumbsSwiper,
                                        autoScrollOffset: 1

                                    }}
                                    navigation={{
                                        prevEl: `.${id}-prev`,
                                        nextEl: `.${id}-next`,
                                    }}
                                >
                                    {
                                        SLIDES.map((slide, i) => (
                                            <SwiperSlide
                                                key={`slide-${i}`}
                                            >
                                                <div className="rounded-xl overflow-hidden relative">
                                                    <img
                                                        src={`/temp/${slide}`}
                                                        width={4234}
                                                        height={2000}
                                                    />

                                                    <div className="fit-cover bg-linear-to-t from-black/80 to-transparent flex flex-col items-center justify-start lg:justify-center gap-4 pt-8">
                                                        <button
                                                            type="button"
                                                            className="rounded-full bg-white size-11 text-gray-700 fit-center pl-px shadow-[0_0_10px_white]"
                                                        >
                                                            <i className="fa-solid fa-play" />
                                                        </button>

                                                        <b className="max-w-lg leading-8 line-clamp-2 text-center">
                                                            مروری بر اخبار دبیرخانه  ‌شورای‌عالی مناطق آزاد و ویژه اقتصادی در هفته‌ای که گذشت / 24 تا 30 آبان 1404
                                                        </b>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>

                                <button
                                    type="button"
                                    className={`size-14 fit-center absolute right-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-1/2 -translate-y-1/2 z-1 ${id}-prev disabled:hidden`}
                                >
                                    <i className="fa-regular fa-arrow-right" />
                                </button>

                                <button
                                    type="button"
                                    className={`size-14 fit-center absolute left-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-1/2 -translate-y-1/2 z-1 ${id}-next disabled:hidden`}
                                >
                                    <i className="fa-regular fa-arrow-left" />
                                </button>

                                <div className="absolute w-full bottom-4 left-0 z-2 p-4 no-select">
                                    <Swiper
                                        spaceBetween={16}
                                        slidesPerView={2.5}
                                        breakpoints={{
                                            992: {
                                                slidesPerView: 4.25
                                            }
                                        }}
                                        autoHeight
                                        onSwiper={setThumbsSwiper}
                                        watchSlidesProgress={true}
                                        modules={[Navigation, Thumbs]}
                                        centeredSlides
                                        centeredSlidesBounds
                                        loop
                                        slideToClickedSlide
                                    >
                                        {
                                            SLIDES.map((slide, i) => (
                                                <SwiperSlide
                                                    key={`slide-${i}`}
                                                    className="blur-sm scale-80 opacity-60 [.swiper-slide-next,.swiper-slide-prev,.swiper-slide-active]:scale-100 [.swiper-slide-next,.swiper-slide-prev,.swiper-slide-active]:blur-none [.swiper-slide-active]:opacity-100 transition-all!"
                                                >
                                                    <div className="overflow-hidden relative">
                                                        <img
                                                            src={`/temp/${slide}`}
                                                            width={4234}
                                                            height={2000}
                                                            className="w-full h-32 object-cover rounded-2xl"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pt-12 pb-6">
                        <div className="m-container flex flex-col items-center gap-2">
                            <h1 className="font-extrabold text-lg">جدید ترین اخبار</h1>
                            <p className="text-sm text-[#A7A7A7]">
                                شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                            </p>
                        </div>
                    </div>

                    <div className="m-container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mb-32">
                            {
                                [...Array(10)].map((_, i) => (
                                    <SwiperSlide key={`news-${i}`}>
                                        <VideoCard
                                            image={`${(i % 4) + 6}.jpg`}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Archive;