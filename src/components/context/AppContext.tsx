import React, { createContext, useState } from 'react';
import { Product } from '../../domain/enity/product';
interface AppContextProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
    addToCart: (product: Product) => void;
}

type AppContextProviderProps = {
    children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
    isLogin: false,
    setIsLogin: () => { },
    products: [],
    setProducts: () => { },
    cart: [],
    setCart: () => { },
    addToCart(product) {
        
    },
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const addToCart = (product: Product) => {
        const existingProductIndex = cart.findIndex((item) => item._id === product._id);
        if (existingProductIndex !== -1) {
            // If the product already exists in the cart, increase the quantity
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            setCart(newCart);
        } else {
            // If the product doesn't exist in the cart, add it with a quantity of 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const [isLogin, setIsLogin] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);



    const appContextValue: AppContextProps = {
        isLogin, setIsLogin,
        products, setProducts,
        cart, setCart,
        addToCart,
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => React.useContext(AppContext)