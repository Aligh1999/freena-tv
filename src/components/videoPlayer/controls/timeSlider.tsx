import { TimeSlider } from '@vidstack/react';

const TimeSliderComponent = () => {
    return (
        <TimeSlider.Root
            className="group relative mx-[7.5px] inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden"
        >
            <TimeSlider.Track className="relative z-0 h-1.25 w-full rounded-sm bg-white/30 group-data-focus:ring-[3px]">
                <TimeSlider.Progress className="absolute h-full w-(--slider-progress) rounded-sm bg-white/50 will-change-[width]" />
                <TimeSlider.TrackFill className="bg-primary absolute h-full w-(--slider-fill) rounded-sm will-change-[width]" />
            </TimeSlider.Track>
            <TimeSlider.Thumb className="absolute left-(--slider-fill) top-1/2 z-20 h-3.75 w-3.75 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-active:opacity-100 group-data-dragging:ring-4 will-change-[left]" />
        </TimeSlider.Root>
    )
}

export default TimeSliderComponent;