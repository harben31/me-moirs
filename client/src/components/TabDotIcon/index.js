import React from 'react';
import { useHistory } from 'react-router-dom';
import TabDeleteModal from '../TabDeleteModal';
import API from '../../utils/API';
import './style.css';
import TabContext from '../../utils/tabContext';

export default function TabDotIcon({ showTabDelete, setShowTabDelete, tabMenu, handleTabToggle, _id, setTabUpdate, tabUpdate }) {
    const history = useHistory();
    // const dTab = useContext(TabContext);

    const showTabDeleteModal = () => {
        showTabDelete ? setShowTabDelete(false) : setShowTabDelete(true);
    };

    const deleteTab = (id) => {
        handleTabToggle();
        setShowTabDelete(false);
        API.deleteTab(id)
            .then(res => {console.log(res);
                history.push('/profile')})
            .catch(err => console.log(err));
    };

    return (
        <TabContext.Provider value={{deleteTab}}>
            <div className='tabMenuIcon'>
                <span className='material-icons tabDotIcon' onClick={() => handleTabToggle()}>
                    more_vert 
                </span> 
                {tabMenu ? (
                    <ul className='tabMenu'>
                        <li>Edit</li>
                        <li onClick={() => showTabDeleteModal()}>Delete</li>
                    </ul>
                ) : null}
                <TabDeleteModal  
                    showTabDelete={showTabDelete} 
                    _id={_id} 
                    setTabUpdate={setTabUpdate} 
                    tabUpdate={tabUpdate} 
                />
            </div>
        </TabContext.Provider>
    )
}