import React, { useState } from 'react';
import Likes from '../Likes';
import Comment from '../Comment';
import CommentButton from '../CommentButton';
import CommentBox from '../CommentBox';
import './style.css';
import API from '../../utils/API';


export default function OldPost(props) {
    const [commentActivated, setCommentActivated] = useState(false);

    const CreateComment = () => {
        if(!commentActivated) {
            setCommentActivated(true);
        } else {
            setCommentActivated(false);
        }
    };

    //deletes post and related comments in DB. Page does not refresh so post is still visible. I am not sure I should mess with that until the posts stay on tab page and nav is fixed.
    const deletePost = () => {
        API.deletePost(props.postId)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };


    //there is no comment el yet. so nothing to put a button on. 
    const deleteComment = () => {
        //need to insert comment _id below in (_id)
        API.deleteComment()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    const formatDate = (dated) => {
        let postDate = new Date(dated);
        let date = postDate.toLocaleDateString();
        return date;
      }


    return (
        <div className='oldPost'>
            <img className='oldPostImage' src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt=''/>

            <div className='oldPostContent'>
                <p className='postDate'>
                    {/* month day and year */}
                    {formatDate(props.date)}
                </p>
                <p className='oldPostTitle'>
                    <b>{props.title}</b>
                </p>
                <p>
                    {props.content}
                </p>
                <Likes
                likes={props.likes}
                user_id={props.user_id}
                post_id={props._id}
                />
                <CommentButton createComment={CreateComment} />
                <button
                    className='postDelBtn'
                    onClick={deletePost}
                    >
                        Delete Post
                </button>
                {commentActivated ? 
                    (
                    <div>
                        <div>
                            <CommentBox
                            user_id={props.user_id}
                            post_id={props._id}
                            username={props.username}
                            />
                        </div>
                        <div>
                            {props.comments.slice(0).reverse().map((comment, i) => {
                                return (
                                    <Comment 
                                        key={i}
                                        formatDate={formatDate}
                                        {...comment}    
                                    />  
                                )
                            })}
                            
                        </div>
                    </div>
                    ) : 
                        null
                }
                
            </div>
        </div>
    )
};