import Footer from "components/footer/footer";
import Header from "components/header/header";
import PageHead from "components/shared/pageHead";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    "13.jpg",
    "12.jpg",
    "11.jpg",
    "14.jpg",
    "15.jpg",
]

const Archive = () => {
    return (
        <>
            <Header />

            <main>
                <PageHead
                    title="منطقه آزاد ارس"
                    desc="شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند"
                />

                <div className="bg-[url(/images/globe.png)] bg-top-left bg-no-repeat">
                    <div className="m-container">
                        <div className="bg-white/3 p-4 rounded-2xl relative">
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
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
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            <div className="absolute w-full bottom-0 left-0 z-2 p-4">
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    autoHeight
                                >
                                    {
                                        SLIDES.map((slide, i) => (
                                            <SwiperSlide
                                                key={`slide-${i}`}
                                            >
                                                <div className="overflow-hidden relative">
                                                    <img
                                                        src={`/temp/${slide}`}
                                                        width={4234}
                                                        height={2000}
                                                        className="h-52 w-auto"
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
            </main>

            <Footer />
        </>
    )
}

export default Archive;