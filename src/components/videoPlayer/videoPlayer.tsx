import { lazy, Suspense } from "react";
const Inner = lazy(() => import("./inner"));

export interface IProps {
    className: string,
    src: string
}

const VideoPlayer = (props: IProps) => {
    return (
        <Suspense fallback={<div>loading ...</div>}>
            <Inner {...props} />
        </Suspense>
    )
}

export default VideoPlayer;