
// import PostForm from '../components/PostForm';
import OldPost from '../components/OldPost';
import React, { useState, useContext } from 'react';
import API from '../utils/API';
import AuthApi from '../utils/AuthApi';

import TabForm from '../components/TabForm/TabForm';


 export default function NewTab() {
   
 const [show, setShow] = useState(false)
 const [tabTitle, setTabTitle] = useState('');
 const [tabDescription, setTabDescription] = useState('');
 const authApi = useContext(AuthApi);

 const CreateTab = (e) => {
    e.preventDefault();
    API.saveTab({
        title: tabTitle,
        description: tabDescription,
    })
    .catch(err => {
        console.log(err)
    })
};

    return (
        <div className= 'new-tabs'>
            {
                show ? ( <div className='tabBody'>
                <aside className='description'>
                <h5>About 'Tab Name'</h5>
                <p>
                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

                    Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

                    Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                </p>
                </aside>
                <section className='postSection'>
                {/* <PostForm /> */}
                <OldPost />
                </section> </div>) : (<TabForm 
                    CreateTab={CreateTab}
                    setTabTitle={setTabTitle} 
                    setTabDescription={setTabDescription}
                    show={show}
                    setShow={setShow}
                />)
            } 
        </div>
    )
}

