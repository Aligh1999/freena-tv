import { MediaPlayer, MediaProvider } from '@vidstack/react';
import '@vidstack/react/player/styles/base.css';
import { twMerge } from 'tailwind-merge';
import type { IProps } from './videoPlayer';
import PlayPauseBtn from './controls/playPauseBtn';

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
        >
            <MediaProvider className="w-full h-auto" />

            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_100%)] absolute bottom-0 w-full left-0 h-32 opacity-0 group-data-controls:opacity-100 transition-opacity" />

            <div className="absolute bottom-0 left-0 w-full text-white p-4 transition-all dir-ltr translate-y-full group-data-controls:translate-y-0 opacity-0 group-data-controls:opacity-100">
                <PlayPauseBtn />
            </div>
        </MediaPlayer>
    )
}

export default Inner;