import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Body />
            </div>
        </Provider>
    )
}

export default App;

// App
//     Header
//         Logo
//         Search
//         UserIcon
//     Body
//         SideBar
//             MenuItems
//         MainContainer
//             ButtonList
//             VideoContainer
//                 VideoCard
