import VideoCard from "components/cards/videoCard/videoCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { useId } from "react";

const NewsSlider = () => {
    const id = useId();

    return (
        <section>
            <div className="relative pt-16">
                <div className="absolute left-0 top-0 h-screen w-full -z-1 bg-[url('/images/globe-dot.png')] bg-no-repeat bg-bottom-left -translate-y-1/2" />

                <div className="m-container relative">
                    <div className="flex justify-between mb-8 flex-col lg:flex-row items-stretch lg:items-start gap-4">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                            <h2 className="text-xl font-extrabold">نشست های خبری</h2>
                            <span className="text-sm">از سواحل تا بازارها؛ کشف دنیای مناطق آزاد</span>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                className={`active:text-gray-400 leading-0 p-2 disabled:opacity-0 disabled:cursor-default! ${id}-prev`}
                            >
                                <i className="fa-regular fa-arrow-right" />
                            </button>

                            <div className="home-news-pagination w-auto!" />

                            <button
                                type="button"
                                className={`active:text-gray-400 leading-0 p-2 disabled:opacity-0 disabled:cursor-default! ${id}-next`}
                            >
                                <i className="fa-regular fa-arrow-left" />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={1.25}
                        spaceBetween={16}
                        modules={[Pagination, Navigation]}
                        navigation={{
                            nextEl: `.${id}-next`,
                            prevEl: `.${id}-prev`
                        }}
                        pagination={{
                            el: ".home-news-pagination"
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 4
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            560: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            }
                        }}
                    >
                        {
                            [...Array(10)].map((_, i) => (
                                <SwiperSlide key={`news-${i}`}>
                                    <VideoCard
                                        image={`${(i % 4) + 6}.jpg`}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default NewsSlider;