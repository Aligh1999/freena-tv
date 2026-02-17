import Footer from "components/footer/footer";
import Header from "components/header/header";
import { useId } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    "13.jpg",
    "12.jpg",
    "11.jpg",
    "14.jpg",
    "15.jpg",
]

const VideoArchive = () => {
    const id = useId();

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

                    <div className="bg-[url(/images/globe.png)] bg-top-left bg-no-repeat mb-8 relative">
                        <Swiper
                            slidesPerView={2.25}
                            spaceBetween={16}
                            centeredSlides
                            centeredSlidesBounds
                            loop
                            modules={[Navigation]}
                            navigation={{
                                prevEl: `.${id}-prev`,
                                nextEl: `.${id}-next`,
                            }}
                        >
                            {
                                SLIDES.map((image, i) => (
                                    <SwiperSlide
                                        key={`video-${i}`}
                                    >
                                        <div className="p-4 bg-white/3 backdrop-blur-sm rounded-2xl">
                                            <img
                                                src={`/temp/${image}`}
                                                className="w-full h-auto rounded-xl"
                                                width={4234}
                                                height={2000}
                                            />

                                            <div className="fit-cover p-4">
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-linear-to-t from-black/80 to-transparent rounded-xl overflow-hidden">
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
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <button
                            type="button"
                            className={`size-14 backdrop-blur-sm fit-center absolute right-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-1/2 -translate-y-1/2 z-1 ${id}-prev disabled:hidden`}
                        >
                            <i className="fa-regular fa-arrow-right" />
                        </button>

                        <button
                            type="button"
                            className={`size-14 backdrop-blur-sm fit-center absolute left-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-1/2 -translate-y-1/2 z-1 ${id}-next disabled:hidden`}
                        >
                            <i className="fa-regular fa-arrow-left" />
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default VideoArchive;