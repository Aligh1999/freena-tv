interface IProps {
    image: string,
    index: number
}

const TinyVideoCard = (props: IProps) => {
    const {
        image,
        index
    } = props;

    return (
        <div className="flex items-center gap-3 relative no-select group cursor-pointer">
            {
                index === 0 && (
                    <div className="absolute h-[130%] aspect-square bg-white/3 border border-white/10 rounded-2xl top-0 -translate-y-[15%] translate-x-[15%] right-0 overflow-hidden fade-in">
                        <div className="w-1 h-6 bg-white rounded-l-lg absolute top-1/2 right-0 -translate-y-1/2" />
                    </div>
                )
            }

            <div className="relative w-30 min-w-30 overflow-hidden rounded-lg">
                <img
                    src={`/temp/${image}.jpg`}
                    width={150}
                    height={80}
                    className="w-full h-auto group-hover:scale-110 transition-transform"
                />

                <div className="fit-cover bg-[linear-gradient(180deg,rgba(0,0,0,0)_49%,#000_100%)] fit-center">
                    <div className="relative size-8 fit-center text-xs">
                        <div className="fit-cover fit-center backdrop-blur-sm rounded-lg rotate-45 border-y border-white/30" />
                        <i className="fa-solid fa-play relative" />
                    </div>
                </div>
            </div>

            <h5 className="text-xs leading-5">
                زیبایی غروب از جزیره زیبای قشم در مرداد ماه
            </h5>
        </div>
    )
}

export default TinyVideoCard;