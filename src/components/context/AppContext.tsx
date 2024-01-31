import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../../domain/enity/product';
interface AppContextProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

type AppContextProviderProps = {
    children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
    isLogin: false,
    setIsLogin: () => { },
    products: [],
    setProducts: () => { }
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);


    const appContextValue: AppContextProps = {
        isLogin, setIsLogin, products, setProducts
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => React.useContext(AppContext)