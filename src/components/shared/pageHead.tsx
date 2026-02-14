interface IProps {
    title: string,
    desc: string
}

const PageHead = (props: IProps) => {
    const {
        desc,
        title
    } = props;

    return (
        <div className="py-12">
            <div className="m-container flex flex-col items-center gap-2">
                <h1 className="font-extrabold text-lg">{title}</h1>
                <p className="text-sm text-[#A7A7A7]">{desc}</p>
            </div>
        </div>
    )
}

export default PageHead;