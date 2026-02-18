import Footer from "components/footer/footer";
import Header from "components/header/header";

const About = () => {
    return (
        <>
            <Header />

            <main>
                <div className="py-12">
                    <div className="m-container flex flex-col items-center gap-2">
                        <h1 className="font-extrabold text-lg">درباره ما</h1>
                        <p className="text-sm text-[#A7A7A7]">
                            شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                        </p>
                    </div>
                </div>

                <div className="m-container">
                    <div className="flex items-stretch gap-4 mb-4 flex-col-reverse lg:flex-row">
                        <div className="grow">
                            <div className="p-8 bg-white/3 rounded-2xl h-full">
                                <b className="leading-8">
                                    مقام معظم رهبری : امروز رسانه‏‌ها در دنيا فكر، فرهنگ، رفتار و در حقيقت هويت فرهنگى انسانها را القاء مى ‏كنند و تعيين‏ كننده هستند.
                                </b>

                                <br />
                                <br />

                                <p className="text-sm leading-8">
                                    امروزه در عصری قرار گرفته ایم که ارتباطات و ارائه اخبار و اطلاعات سریع و به  موقع در آگاهی بخشی جامعه بسیار موثر است. بی شک توسعه اقتصادی جوامع در  گرو اطلاع رسانی صحیح است اين در حالي است که دنياي امروز رسانه ها، لزوم  ایجاد رسانه های تخصصی را بیش از پیش درک کرده و در این میان پایگاه های  خبری و اطلاع رسانی در حوزه اقتصادی و بازرگانی و بویژه مناطق آزاد و ویژه  اقتصادی سهم بسزایی را ایفا می کنند.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-96 lg:min-w-96 rounded-2xl overflow-hidden p-4 bg-white/3 relative">
                            <img
                                src="/images/about.png"
                                className="lg:w-full lg:min-h-full object-cover rounded-xl mx-auto"
                                width={521}
                                height={545}
                            />

                            <div className="fit-cover fit-center">
                                <div className="size-28 backdrop-blur-xl rounded-2xl fit-center p-4">
                                    <img
                                        src="/images/logo/1.png"
                                        width={357}
                                        height={227}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/3 rounded-2xl p-6 mb-16 leading-10 text-sm">
                        <b>با در نظر گرفتن اخلاق حرفه ای و رسانه ای بر آنیم کلیه فعالیت های مناطق آزاد و ویژه اقتصادی کشور را با  رویکردی جدید در قالب خبر، مقاله، گزارش، گفت و گو و گزارش تصویری در  اختیار مخاطبان قرار دهیم.</b>

                        <p>
                            اخبار، اطلاعات، قوانین و مقررات و فرصت  های سرمایه گذاری مناطق آزاد و ویژه کشور از جمله مواردی است که در این  پایگاه در دسترس بازدید کنندگان قرار خواهد گرفت.
                        </p>

                        <span><a href="#" className="underline font-bold">پایگاه خبری مناطق آزاد و ویژه اقتصادی</a> متعلق به <a href="#" className="underline font-bold">دبیرخانه شورایعالی مناطق آزاد تجاری ـ صنعتی و ویژه اقتصادی</a> است.</span>
                        <br />

                        <span>
                            این پایگاه خبری، تنها سایت رسمی انعکاس اخبار مناطق آزاد و ویژه اقتصادی در کشور است.
                        </span>

                        <ul>
                            <li>
                                <b>دبیر شورا:</b> رضا مسرور
                            </li>

                            <li>
                                <b>مدیر کل روابط عمومی و امور بین الملل:</b> حسین مرادی
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="tel:info@freena.ir font-bold"
                                >
                                    info@freena.ir
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default About;