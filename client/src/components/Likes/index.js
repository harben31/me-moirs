import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

export default function Likes(props) {
    // state = {
    //     likes: 0,
    //     liked: false
    // };

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLikes(props.likes.length)
    }, [props.likes.length])

    useEffect(() => {
        props.likes.forEach(user_id => {
            if(user_id===props.user_id){
                setLiked(true)
            }
        });
    }, [])

    const addLike = () => {
        if(!liked) {
            setLiked(true);
            let newCount = likes + 1;
            setLikes(newCount);
            API.addLike(props.post_id, {
                user_id: props.user_id
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
            setLiked(false);
            let newCount = likes - 1;
            setLikes(newCount); 
            API.unLike(props.post_id, {
                user_id: props.user_id
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } 
    };


    return (
        <span>
            <span className="likes material-icons" onClick={addLike}>
                favorite
            </span>
            <span>{likes}</span>
        </span>
    );
};