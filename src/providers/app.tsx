import { BrowserRouter } from "react-router";
import RoutesProvider from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <RoutesProvider />
        </BrowserRouter>
    )
}

export default App;