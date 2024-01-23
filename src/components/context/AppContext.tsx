import React, { createContext, useState } from 'react';
interface AppContextProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

type AppContextProviderProps = {
    children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
    isLogin: false,
    setIsLogin: () => { }
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    const appContextValue: AppContextProps = {
        isLogin, setIsLogin
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => React.useContext(AppContext)