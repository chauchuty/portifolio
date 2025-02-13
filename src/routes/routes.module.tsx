import { useRoutes } from "react-router";
import { IndexPage } from "../pages/Index";
import { LayoutComponent } from "../components/Layout";

export function AppRoutes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <LayoutComponent />, // Envolve com o layout
            children: [ // Rotas filhas
                { index: true, element: <IndexPage /> },
            ],
        },
    ]);

    return routes;
};

