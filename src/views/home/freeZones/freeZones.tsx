import VideoCard from "components/cards/videoCard/videoCard";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
]

const FreeZones = () => {
    return (
        <>
            <Header />

            <main>
                <section>
                    <div className="bg-[url(/images/globe.png)] bg-top-left bg-no-repeat mb-20 relative">
                        <div className="py-12">
                            <div className="m-container flex flex-col items-center gap-2">
                                <h1 className="font-extrabold text-lg">منطقه آزاد ارس</h1>
                                <p className="text-sm text-[#A7A7A7]">
                                    شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                                </p>
                            </div>
                        </div>

                        <Swiper
                            slidesPerView="auto"
                            centeredSlides
                            centeredSlidesBounds
                            spaceBetween={0}
                            loop
                            freeMode={{
                                sticky: true
                            }}
                        >
                            {
                                SLIDES.map((image, i) => (
                                    <SwiperSlide
                                        key={`slide-${i}`}
                                        className="m-container!"
                                    >
                                        <div className="p-4 bg-white/3 relative rounded-2xl">
                                            <img
                                                src={`/temp/${image}`}
                                                width={4234}
                                                height={2000}
                                                className="bg-black/30 rounded-xl"
                                            />

                                            <div className="fit-cover p-4">
                                                <div className="w-full h-full bg-linear-to-t from-black/80 to-transparent rounded-xl flex flex-col justify-end p-4">
                                                    <p className="leading-7 line-clamp-2 md:line-clamp-3 text-sm text-center">
                                                        منطقه ارس از دیرباز جایگاه مهمی در تجارت جهانی داشته و همواره مورد توجه بازرگانان و مسافران آسیا – اروپا و جاده ابریشم بوده است. علاوه بر اهمیت این منطقه در تجارت و تزانزیت، ویژگی‌های طبیعی و جغرافیایی این منطقه نیز بر ظرفیت‌های آن افزوده است. در همین راستا منطقه آزاد تجاری – صنعتی ارس در سال ۱۳۸۴ با مساحت اولیه ۹۷۰۰ هکتار آغاز به کار نمود. محدوده این منطقه آزاد تجاری – صنعتی در سال ۱۳۸۷ گسترش یافته و به ۵۱۰۰۰ هکتار رسید. منطقه آزاد تجاری – صنعتی ارس که شامل مناطقی از شهرستان‌های جلفا و خداآفرین می‌شود
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </section>

                <section>
                    <div className="m-container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-12">
                            {
                                [...Array(10)].map((_, i) => (
                                    <VideoCard
                                        key={`video-${i}`}
                                        image={`${(i % 4) + 6}.jpg`}
                                    />
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

export default FreeZones;