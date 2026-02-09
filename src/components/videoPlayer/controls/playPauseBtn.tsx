import { PlayButton, useMediaState } from "@vidstack/react";
import { PlayIcon, PauseIcon } from '@vidstack/react/icons';

const PlayPauseBtn = () => {
    const playing = useMediaState("playing");

    return (
        <PlayButton className="size-8">
            {playing ? <PauseIcon /> : <PlayIcon />}
        </PlayButton>
    )
}

export default PlayPauseBtn;