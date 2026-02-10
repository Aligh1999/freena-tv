import Header from "components/header/header";
import AbovePlayer from "./abovePlayer/abovePlayer";
import VideoSlider from "./videoSlider/videoSlider";
import VideoSec from "./videoSec/videoSec";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="grid grid-cols-1 gap-16">
                    <AbovePlayer />
                    <VideoSlider />
                    <VideoSec />
                </div>
            </main>
        </>
    )
}

export default Home;