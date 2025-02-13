import { useRoutes } from "react-router";
import { IndexPage } from "../pages/Index";

export function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <IndexPage /> }
    ]);
    
    return routes;
};

