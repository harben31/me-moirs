import React from 'react';
import { Layout, Header, HeaderTabs, Tab, Content } from 'react-mdl';
import { SliderData } from '../Demo'
import './style.css';

export default function Navbar() {
    return (
        
           <div style={{height: '65px', position: 'relative'}}>
         <Layout fixedHeader fixedTabs >
              <Header className= 'nav-header'>
                 {/* <HeaderRow title="Title" />  */}
                 <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>{SliderData.map((tab, index) => {
            return(
                      <Tab key={index} className= 'tabs'>{tab.title}</Tab>
                 )
                 })}
                </HeaderTabs>
             </Header>
             <Content className= 'nav-content'>
             </Content>
             </Layout> 
        </div> 

    )
}
