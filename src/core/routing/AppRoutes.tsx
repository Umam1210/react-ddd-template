import { createBrowserRouter } from "react-router-dom";
import App from "../../ui/pages/App";
import Test from "../../ui/pages/Test";



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
