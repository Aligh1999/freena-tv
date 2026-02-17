import GlareHover from "components/bits/glareHover/glareHover";
import { Link } from "react-router";

interface IProps {
    image: string
}

const VideoCard = (props: IProps) => {
    const {
        image
    } = props;

    return (
        <div className="no-select">
            <div className="bg-white/3 border border-white/10 block rounded-2xl mb-4">
                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.2}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    width="100%"
                    height="100%"
                    background="transparent"
                    borderColor="transparent"
                >
                    <div className="p-3">
                        <img
                            src={`/temp/${image}`}
                            width={515}
                            height={300}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                    <Link to="/" className="fit-cover" />
                </GlareHover>
            </div>

            <Link to="/" className="hover:text-gray-300 transition-colors">
                <h5 className="whitespace-nowrap overflow-hidden text-ellipsis font-bold mb-2">
                    اختصاص بخشی از هدفگذاری 100 میلیاردی اختصاص بخشی از هدفگذاری 100 میلیاردی ...
                </h5>
            </Link>

            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-xs opacity-50">
                در مسیر ارائه خدمات تربیتی خود تلاش می‌کنیم در مسیر ارائه خدمات تربیتی خود تلاش می‌کنیم...
            </p>
        </div>
    )
}

export default VideoCard;