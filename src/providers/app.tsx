import { BrowserRouter } from "react-router";
import RoutesProvider from "./routes";
import { Provider } from "react-redux";
import { store } from "redux/store";
import userStackListener from "./hooks/useStackListener";
import moment from "moment-jalaali";
moment.loadPersian({
    dialect: "persian-modern",
});

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layer1 />
                <RoutesProvider />
            </BrowserRouter>
        </Provider>
    )
}

const Layer1 = () => {
    userStackListener();

    return <></>
}

export default App;