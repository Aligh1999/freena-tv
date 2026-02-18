import Footer from "components/footer/footer";
import Header from "components/header/header";
import { MAP_TILE } from "constants/config";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import ReactTextareaAutosize from "react-textarea-autosize";

const POSITION: LatLngExpression = [35.69909146960962, 51.337988656873506];

const Contact = () => {

    return (
        <>
            <Header />

            <main>
                <div className="py-12">
                    <div className="m-container flex flex-col items-center gap-2">
                        <h1 className="font-extrabold text-lg">
                            تماس با ما
                        </h1>

                        <p className="text-sm text-[#A7A7A7]">
                            شرکت فرینا برای شما دوستان عزیز چه خدماتی ارائه میدهند
                        </p>
                    </div>
                </div>

                <div className="m-container">
                    <div className="grid grid-cols-1 gap-8 pb-16">
                        <section>
                            <div className="bg-white/3 rounded-2xl p-4">
                                <div className="rounded-xl overflow-hidden h-72 lg:h-96">
                                    <MapContainer
                                        center={POSITION}
                                        zoom={16}
                                        className="h-full z-10"
                                        zoomControl={false}
                                    >
                                        <TileLayer url={MAP_TILE} />
                                        <Marker position={POSITION} />
                                    </MapContainer>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="bg-white/3 rounded-2xl p-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="bg-[#161616] rounded-2xl px-8 py-8 lg:py-24 flex flex-col items-center justify-center">
                                        <ul className="[&_b]:font-semibold text-sm">
                                            <li className="mb-4 last:mb-0 flex items-center gap-2">
                                                <i className="fa-regular fa-phone" />
                                                <b>شماره تماس:</b>
                                                <a href="tel:+92175207000">021-75207000</a>
                                            </li>

                                            <li className="mb-4 last:mb-0 flex items-center gap-2">
                                                <i className="fa-regular fa-at" />
                                                <b>پست الکترونیک:</b>
                                                <a href="mailto:+92175207000">publicrelations@freezones.ir</a>
                                            </li>

                                            <li className="mb-4 last:mb-0 flex items-center gap-2">
                                                <i className="fa-regular fa-location-dot" />
                                                <b>
                                                    تهران خیابان ولیعصر بالاتر از ظفر بلوار اسفندیار پلاک 51
                                                </b>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl bg-linear-to-t from-[#161616] to-[#254CB1] flex flex-col items-center justify-center gap-8 py-8 lg:p-0">
                                        <p className="leading-8 px-10 text-center font-semibold">
                                            برای دسترسی سریع و راحت به ساختمان خبرگذاری فرینا میتوانید از نرم افزار های مسیر یاب رو به رو استفاده کنید...
                                        </p>

                                        <div className="flex">
                                            <a
                                                href={`https://balad.ir/directions/driving?destination=${POSITION[0]},${POSITION[1]}`}
                                                target="_blank"
                                                className="grow basis-0 bg-[#1F154A] hover:bg-[#19113d] transition-colors py-4 rounded-lg flex items-center justify-center mx-3 px-8"
                                            >
                                                <img
                                                    src="/images/balad.svg"
                                                    className="w-8 ml-4"
                                                    alt="بلد"
                                                />

                                                <b className="font-black text-lg">بلد</b>
                                            </a>

                                            <a
                                                href={`https://nshn.ir/?lat=${POSITION[0]}&lng=${POSITION[1]}`}
                                                target="_blank"
                                                className="grow basis-0 transition-colors rounded-lg relative bg-black/50 hover:bg-black/70 fit-center px-8"
                                            >
                                                <img
                                                    src="/images/neshan.svg"
                                                    className="max-w-full max-h-full"
                                                    alt="نشان"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="p-8 bg-white/3 rounded-2xl">
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="font-extrabold">راه های ارتباطی با ما</h2>
                                        <hr className="grow border-white/7" />
                                    </div>

                                    <span className="text-xs font-extralight opacity-80">
                                        {"communication with us".toLocaleUpperCase()}
                                    </span>
                                </div>

                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <input
                                                type="text"
                                                className="field-c1"
                                                placeholder="نام خود را وارد کنید ..."
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                className="field-c1"
                                                placeholder="ایمیل خود را وارد کنید ..."
                                            />
                                        </div>

                                        <div className="col-span-full">
                                            <ReactTextareaAutosize
                                                className="field-c1"
                                                placeholder="متنن توضیحات خود را وارد کنید ..."
                                                minRows={5}
                                            />
                                        </div>

                                        <div className="col-span-full">
                                            <button
                                                type="submit"
                                                className="bg-primary hover:bg-primary-dark rounded-xl py-4 text-sm flex items-center"
                                            >
                                                <span className="px-12">ثبت تماس</span>
                                                <i className="fa-light fa-arrow-left text-sm ml-3" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Contact;