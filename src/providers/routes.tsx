import { useMemo } from "react";
import { useRoutes, type RouteObject } from "react-router";
import Archive from "views/archive/archive";
import Home from "views/home/home";
import VideoArchive from "views/videoArchive/videoArchive";

const RoutesProvider = () => {
    const routes = useMemo(() => {
        return [
            {
                index: true,
                element: <Home />
            },
            {
                path: "archives",
                element: <Archive />
            },
            {
                path: "videos",
                element: <VideoArchive />
            }
        ] as RouteObject[]
    }, [])

    return useRoutes(routes);
}

export default RoutesProvider;