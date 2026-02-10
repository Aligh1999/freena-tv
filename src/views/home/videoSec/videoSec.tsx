import TinyVideoCard from "components/cards/tinyVideoCard/tinyVideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import style from "./videoSec.module.css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const VideoSec = () => {
    return (
        <div className="m-container">
            <div className="-mt-24 relative">
                <div className="start-circle absolute -z-1 top-0 right-0 opacity-45 -translate-y-1/3" />

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mb-16">
                    <h2 className="text-xl font-extrabold">جاذبه های گردشگری</h2>
                    <span className="text-sm">از سواحل تا بازارها؛ کشف دنیای مناطق آزاد</span>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-x-4 gap-y-8 relative">
                    <div className={`h-full aspect-square rounded-full absolute left-0 top-0 translate-y-1/2 -z-1 blurCircleBox ${style.blurCircleBox}`} />

                    <div className="grow relative pr-4 lg:p-0">
                        <div className="bg-white/3 rounded-2xl border border-white/10 h-[108%] absolute aspect-square right-0 -translate-y-[4%] lg:translate-x-[4%]" />

                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={20}
                            autoHeight
                            className="home-tourism-slider"
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}
                        >
                            <SwiperSlide>
                                <div className="h-full rounded-2xl overflow-hidden relative">
                                    <img
                                        src="/temp/8.png"
                                        className="w-full h-auto"
                                    />

                                    <div className="fit-cover fit-center">
                                        <div className="relative size-16 fit-center">
                                            <div className="fit-cover fit-center backdrop-blur-md rounded-lg rotate-45 border-y border-white/50" />
                                            <i className="fa-solid fa-play relative text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="lg:w-80 bg-white/5 backdrop:blur-sm rounded-2xl relative">
                        <div className="lg:fit-cover flex flex-col">
                            <OverlayScrollbarsComponent defer className="grow min-h-0 p-5">
                                {
                                    [...Array(7)].map((_, i) => (
                                        <div className="mb-4 last:mb-0">
                                            <TinyVideoCard
                                                image={String(((i + 1) % 5) + 1)}
                                                index={i}
                                            />
                                        </div>
                                    ))
                                }
                            </OverlayScrollbarsComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSec;