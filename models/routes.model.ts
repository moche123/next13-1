export const Routes = {
    HOME: {
        path: "/",
        name: "Home"
    },
    CHARACTERES: {
        path: "/information/characteres",
        name: "Charactes"
    },
    LOCATIONS: {
        path: "/information/locations",
        name: "Locations"
    }
}

export interface Route{
    path: string;
    name: string;
}