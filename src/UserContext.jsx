import { createContext } from "react";

export const UserContext = createContext({
    user: {name:"saani", role:"admin",theme:"dark"},
    setUser: () => {}
});