import GlareHover from "components/animate/glareHover/glareHover";

const AbovePlayer = () => {
    return (
        <div className="bg-[url(./images/globe.png)] bg-no-repeat bg-center pt-16">
            <div className="m-container">
                <div className="relative flex">
                    <div className="w-96 min-w-96 grid grid-cols-4 gap-4">
                        {
                            [...Array(16)].map((_, i) => (
                                <div
                                    className="bg-white/5 backdrop-blur-2xl rounded-lg aspect-square fit-center cursor-pointer hover:bg-white/10 transition-colors"
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

                    <div className="grow min-w-0">

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AbovePlayer;