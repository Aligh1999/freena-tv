import Header from "components/header/header";
import AbovePlayer from "./abovePlayer/abovePlayer";
import VideoSlider from "./videoSlider/videoSlider";
import VideoSec from "./videoSec/videoSec";
import NewsSlider from "./newsSlider/newsSlider";
import ExperienceSec from "./experienceSec/experienceSec";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="grid grid-cols-1 gap-16">
                    <AbovePlayer />
                    <VideoSlider />
                    <VideoSec />
                    <NewsSlider />
                    <ExperienceSec />
                </div>
            </main>
        </>
    )
}

export default Home;