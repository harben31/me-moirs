import React, { useState, useEffect } from 'react';
import {AccountBox} from '../components/AccountBox/index'
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import { motion, AnimatePresence } from 'framer-motion';

// const formAnimation = {
//     hidden: {
//         y:'200',
//         opacity:0
//     },
//     visible: {
//         y:'0px',
//         opacity:1,
//         transition:{
//             ease: [.6, .01, -.5, .95],
//             duration: 1.6
//         }
//         // { delay: 0.1}
//     },
//     exit: {
//         y:'-200',
//         opacity:0,
//         transition:{
//             ease: 'easeInOut',
//             duration: .6,
//             delay:1

//         }
//     }   
// }
export default function LoginSignup() {
    const [coverImage, setCoverImage] = useState([]);

    useEffect(() => {
        setCoverImage(
           { 
            cover_image:'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwam91cm5hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
           } 
        )
    }, [])

    return (
        <div>
            <CoverPhoto image={coverImage.cover_image}/>
           <AnimatePresence> 
                <motion.div>
                    <AccountBox/>
                </motion.div>
            </AnimatePresence>

        </div>
    )
}
