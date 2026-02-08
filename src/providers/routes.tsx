import { useMemo } from "react";
import { useRoutes, type RouteObject } from "react-router";
import Home from "views/home/home";

const RoutesProvider = () => {
    const routes = useMemo(() => {
        return [
            {
                index: true,
                element: <Home />
            }
        ] as RouteObject[]
    }, [])

    return useRoutes(routes);
}

export default RoutesProvider;