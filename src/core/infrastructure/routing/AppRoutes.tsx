import { createBrowserRouter } from "react-router-dom";
import App from "../../../presentation/pages/App";
import Test from "../../../presentation/pages/Test";



export const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/test",
            element: <Test />
        }
    ])
