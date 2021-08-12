import React, { createContext } from 'react';

const TabContext = createContext({
    tabs: [],
    deleteTab: () => {},
    // friendTabs:[],
    // tabsFriend: false,
    friendTab:() => {},
    userData: {}
});

export default TabContext;