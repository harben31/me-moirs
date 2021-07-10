import React, { useState } from 'react';
import Likes from '../Likes';
import CommentButton from '../CommentButton';
import CommentBox from '../CommentBox';
import './style.css';


export default function OldPost() {
    const [commentActivated, setCommentActivated] = useState(false);

    const CreateComment = () => {
        setCommentActivated(true);
    }

    return (
        <div className='oldPost'>
            <img className='oldPostImage' src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt=''/>
            <div className='oldPostContent'>
                <p>
                    01/21/2023
                </p>
                <p className='oldPostTitle'>
                    Title
                </p>
                <p>
                    Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                </p>
                <Likes />
                <CommentButton createComment={CreateComment} />
                {commentActivated ? 
                    (
                        <div>
                            <CommentBox />
                        </div>
                    ) : 
                        null
                }
                
            </div>
        </div>
    )
};