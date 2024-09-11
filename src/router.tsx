import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./common-components/public-layout/PublicLayout";
import App from "./App";


export const router = createBrowserRouter([
    {
        path: "",
        element: <PublicLayout />,
        children: [
            {
                path: "",
                element: <App />
            }
        ]
    }
])
