import VideoCard from "components/cards/videoCard/videoCard";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import { useId, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

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

const VideoArchive = () => {
    const id = useId();
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

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

                    <div className="bg-[url(/images/globe.png)] bg-top-left bg-no-repeat mb-20 relative">
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={16}
                            centeredSlides
                            centeredSlidesBounds
                            loop
                            modules={[Navigation]}
                            breakpoints={{
                                1270: {
                                    slidesPerView: 2.25
                                },
                                1920: {
                                    slidesPerView: 3.5
                                }
                            }}
                            navigation={{
                                prevEl: `.${id}-prev`,
                                nextEl: `.${id}-next`,
                            }}
                        >
                            {
                                SLIDES.map((image, i) => (
                                    <SwiperSlide
                                        key={`video-${i}`}
                                        className="group"
                                    >
                                        <div className="p-4 bg-white/3 backdrop-blur-sm rounded-2xl opacity-50 group-[.swiper-slide-active]:opacity-100 transition-opacity">
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
                                                        className="rounded-full bg-white size-11 text-gray-700 fit-center pl-px shadow-[0_0_10px_white] hidden md:flex"
                                                    >
                                                        <i className="fa-solid fa-play" />
                                                    </button>

                                                    <div className="leading-8 p-4">
                                                        <b className="max-w-lg line-clamp-2 text-center">
                                                            مروری بر اخبار دبیرخانه  ‌شورای‌عالی مناطق آزاد و ویژه اقتصادی در هفته‌ای که گذشت / 24 تا 30 آبان 1404
                                                        </b>
                                                    </div>
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

                <section>
                    <div className="mb-24">
                        <div className="m-container">
                            <div className="flex lg:items-start gap-x-4 gap-y-8 flex-col lg:flex-row">
                                <div className="lg:w-72 lg:min-w-72 grid grid-cols-1 gap-4 lg:pt-22">
                                    <div className="bg-white/3 rounded-2xl p-3">
                                        <div className="flex items-stretch bg-black/10 rounded-xl overflow-hidden focus-within:shadow-[0_0_0_2px_rgba(255,255,255,.07)] transition-shadow">
                                            <input
                                                type="text"
                                                className="grow min-w-0 p-4 text-sm"
                                                placeholder="جستجو..."
                                            />

                                            <button
                                                type="button"
                                                className="fit-center px-3.5 hover:bg-black/10"
                                            >
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white/3 rounded-2xl p-3">
                                        <div className="bg-black/10 flex items-center justify-between p-4 text-sm mb-4">
                                            <h2 className="font-bold">دسته بندی ها</h2>
                                            <i className="fa-solid fa-grid-2-plus" />
                                        </div>

                                        <ul>
                                            {
                                                ["مناطق آزاد", "مناطق ویژه اقتصادی", "تلویزیون اینترنتی", "جاذبه های گردشگری", "فرصت های سرمایه گذاری", "مصاحبه"].map((title, i) => {
                                                    const checked = checkedItems.includes(title);

                                                    return (
                                                        <li key={`filter-${i}`}>
                                                            <label className="flex items-center justify-between p-3 text-sm cursor-pointer">
                                                                <span className={twMerge("opacity-75 transition-opacity", checked && "opacity-100")}>
                                                                    {title}
                                                                </span>

                                                                <input
                                                                    type="checkbox"
                                                                    className="m-checkbox"
                                                                    checked={checked}
                                                                    onChange={e => {
                                                                        if (e.target.checked)
                                                                            setCheckedItems(prev => [...prev, title]);
                                                                        else
                                                                            setCheckedItems(prev => prev.filter(el => el !== title));
                                                                    }}
                                                                />
                                                            </label>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className="grow">
                                    <div className="mb-8">
                                        <div className="m-container flex flex-col items-center gap-2">
                                            <h2 className="font-extrabold text-lg">جدید ترین اخبار</h2>
                                            <p className="text-sm text-[#A7A7A7]">
                                                شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                                        {
                                            [...Array(10)].map((_, i) => (
                                                <VideoCard
                                                    key={`news-${i}`}
                                                    image={`${(i % 4) + 6}.jpg`}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default VideoArchive;