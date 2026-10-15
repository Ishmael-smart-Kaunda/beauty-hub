import Layout from "./layout/layout"
import Home from "./pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
            [
                { path: "/", 
                Component: Layout,
                children: [
                    {index: true, Component: Home},
                ],                    
                },                 
            ]);

export default router;