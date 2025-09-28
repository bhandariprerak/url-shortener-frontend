/**
 * This file creates a React Context for global state management of the authentication token.
 * It provides a ContextProvider component to wrap the app and make the token and its setter available globally,
 * and a custom hook for consuming the context.
 */
import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

// ContextProvider wraps the app and provides the authentication token and its setter to all children components.
export const ContextProvider = ({ children }) => {
    // Retrieve JWT token from localStorage (if it exists) for initial state.
    const getToken = localStorage.getItem("JWT_TOKEN")
        ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
        : null;

    const [token, setToken] = useState(getToken);

    const sendData = {
        token,
        setToken,
    };

    return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>
};


// Custom hook for consuming the context in child components.
export const useStoreContext = () => {
    const context = useContext(ContextApi);
    return context;
}