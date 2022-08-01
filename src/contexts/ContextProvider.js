import React, { createContext, useContex, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
};

export const ContextProvider = ({childern}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu
            }}
        >
            {childern}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContex(StateContext);