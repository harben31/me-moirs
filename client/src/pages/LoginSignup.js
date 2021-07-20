import React, { useState, useEffect } from 'react';
import {AccountBox} from '../components/AccountBox/index'
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import { motion, AnimatePresence } from 'framer-motion';

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
