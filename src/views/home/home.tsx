import Header from "components/header/header";
import AbovePlayer from "./abovePlayer/abovePlayer";
import VideoSlider from "./videoSlider/videoSlider";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="grid grid-cols-1 gap-16">
                    <AbovePlayer />
                    <VideoSlider />
                </div>
            </main>
        </>
    )
}

export default Home;