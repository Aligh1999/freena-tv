import { useMemo } from "react";
import { useRoutes, type RouteObject } from "react-router";

const RoutesProvider = () => {
    const routes = useMemo(() => {
        return [
            {
                index: true,
                element: <>asdasdww</>
            }
        ] as RouteObject[]
    }, [])

    return useRoutes(routes);
}

export default RoutesProvider;