import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import VideoPage from "./components/VideoPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />
            },
            {
                path: "/watch",
                element: <VideoPage />
            }
        ]
    }
])

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <RouterProvider router={appRouter} />
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
