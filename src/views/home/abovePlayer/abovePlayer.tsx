import GlareHover from "components/bits/glareHover/glareHover";
import VideoPlayer from "components/videoPlayer/videoPlayer";

const AbovePlayer = () => {
    return (
        <div className="bg-[url(./images/globe.png)] bg-no-repeat bg-center pt-16 relative">
            <div className="m-container p-0 lg:px-4 relative">
                <div className="relative flex flex-col-reverse lg:flex-row items-start gap-4">
                    <div className="lg:w-96 lg:min-w-96 flex flex-nowrap lg:grid grid-cols-4 gap-4 relative px-4 lg:px-0 overflow-auto w-full">
                        <div className="bg-[radial-gradient(48.14%_48.52%_at_49.47%_49.75%,#003AFF_0%,rgba(43,70,147,0.35)_64%,rgba(67,77,89,0)_100%)] bg-blend-color-dodge mix-blend-color-dodge absolute w-full h-full opacity-50" />

                        {
                            [...Array(16)].map((_, i) => (
                                <div
                                    className="bg-white/5 backdrop-blur-sm rounded-xl aspect-square fit-center cursor-pointer hover:bg-white/10 transition-colors relative w-20 lg:w-auto min-w-20 lg:min-w-0"
                                    key={`num-${i}`}
                                >
                                    <GlareHover
                                        glareColor="#ffffff"
                                        glareOpacity={0.2}
                                        glareAngle={-30}
                                        glareSize={300}
                                        transitionDuration={800}
                                        playOnce={true}
                                        width="100%"
                                        height="100%"
                                        background="transparent"
                                        borderColor="transparent"
                                    >
                                        <img
                                            src={`/temp/${(i % 6) + 1}.png`}
                                            className="max-w-full max-h-full p-2"
                                        />
                                    </GlareHover>
                                </div>
                            ))
                        }
                    </div>

                    <div className="grow min-w-0 px-4 lg:p-0 mb-4 lg:mb-0">
                        <div className="p-2 lg:p-4 relative">
                            <div className="bg-white/3 border border-white/10 backdrop-blur-sm absolute top-0 right-0 w-full h-1/2 rounded-2xl" />

                            <VideoPlayer
                                src="/temp/1.mp4"
                                className="rounded-2xl overflow-hidden block!"
                            />

                            <img
                                src="/images/tv-base.png"
                                className="mx-auto relative -top-px -z-1"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="start-circle opacity-40 absolute bottom-0 left-0 -z-5" />
            <div className="start-circle opacity-40 absolute bottom-0 left-1/2 -z-5" />
        </div >
    )
}

export default AbovePlayer;