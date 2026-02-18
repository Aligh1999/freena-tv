import { useMemo } from "react";
import { useRoutes, type RouteObject } from "react-router";
import About from "views/about/about";
import Archive from "views/archive/archive";
import FreeZones from "views/home/freeZones/freeZones";
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
            },
            {
                path: "freezones",
                element: <FreeZones />
            },
            {
                path: "about",
                element: <About />
            }
        ] as RouteObject[]
    }, [])

    return useRoutes(routes);
}

export default RoutesProvider;