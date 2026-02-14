import Header from "components/header/header";
import AbovePlayer from "./abovePlayer/abovePlayer";
import VideoSlider from "./videoSlider/videoSlider";
import VideoSec from "./videoSec/videoSec";
import NewsSlider from "./newsSlider/newsSlider";
import ExperienceSec from "./experienceSec/experienceSec";
import Footer from "components/footer/footer";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="grid grid-cols-1 gap-16 pb-32">
                    <AbovePlayer />
                    <VideoSlider />
                    <VideoSec />
                    <NewsSlider />
                    <ExperienceSec />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Home;