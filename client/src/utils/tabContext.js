import React, { createContext } from 'react';

const TabContext = createContext({
    tabs: [],
    deleteTab: () => {},
    friendTabs:[],
    tabsFriend: false,
    friendTab:() => {}
});

export default TabContext;