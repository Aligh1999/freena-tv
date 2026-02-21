import { MediaPlayer, MediaProvider } from "@vidstack/react";
import "@vidstack/react/player/styles/base.css";
import { twMerge } from "tailwind-merge";
import type { IProps } from "./videoPlayer";
import PlayPauseBtn from "./controls/playPauseBtn";
import TimeSliderComponent from "./controls/timeSlider";

const Inner = (props: IProps) => {
    const {
        className,
        src
    } = props;

    return (
        <MediaPlayer
            src={src}
            playsInline
            className={twMerge("group relative overflow-hidden bg-black", className)}
            volume={0.5}
            load="idle"
            autoPlay
            muted
        >
            <MediaProvider className="w-full h-auto" />

            <div className="bg-linear-to-t from-black to-transparent absolute bottom-0 w-full left-0 h-32 opacity-0 group-data-controls:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 left-0 w-full text-white p-4 transition-all dir-ltr translate-y-full group-data-controls:translate-y-0 opacity-0 group-data-controls:opacity-100">
                <TimeSliderComponent />

                <div className="flex">
                    <PlayPauseBtn />
                </div>
            </div>
        </MediaPlayer>
    )
}

export default Inner;