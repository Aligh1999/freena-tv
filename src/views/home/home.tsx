import Header from "components/header/header";
import AbovePlayer from "./abovePlayer/abovePlayer";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <div className="grid grid-cols-1 gap-16">
                    <AbovePlayer />
                </div>
            </main>
        </>
    )
}

export default Home;