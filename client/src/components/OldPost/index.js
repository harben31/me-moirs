import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import DotIcon from '../DotIcon';
import Likes from '../Likes';
import Comment from '../Comments/Comment';
import CommentButton from '../Comments/CommentButton';
import CommentBox from '../Comments/CommentBox';
import './style.css';
// import API from '../../utils/API';


export default function OldPost(props) {
    const [commentActivated, setCommentActivated] = useState(false);
    const [menu, setMenu] = useState(false);
    const [commentMenu, setCommentMenu] = useState(false);

    const CreateComment = () => {
        if(!commentActivated) {
            setCommentActivated(true);
        } else {
            setCommentActivated(false);
        }
    };

    const handleToggle = () => {
        if (!menu) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    const handleCommentToggle =() => {
        if (!commentMenu) {
            setCommentMenu(true);
        } else {
            setCommentMenu(false);
        }
    }

    //there is no comment el yet. so nothing to put a button on. 
    // const deleteComment = () => {
    //     //need to insert comment _id below in (_id)
    //     API.deleteComment()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // };

    const formatDate = (dated) => {
        let postDate = new Date(dated);
        let date = postDate.toLocaleDateString();
        return date;
      }

    return (
        <div className='oldPost'>
            <img className='oldPostImage' src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt=''/>
            <DeleteModal showDelete={props.showDelete}/>
            <div className='oldPostContent'>
                <div className='postTop'>
                    <p className='postDate'>
                        {formatDate(props.date)}
                    </p>
                    <DotIcon  handleToggle={handleToggle} menu={menu} _id={props._id} setUpdate={props.setUpdate} update={props.update}/>
                </div>
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
                {commentActivated ? 
                    (
                    <div>
                        <div>
                            <CommentBox
                            user_id={props.user_id}
                            post_id={props._id}
                            username={props.username}
                            setComment={props.setComment} 
                            commentMenu={commentMenu}
                            />
                        </div>
                        <div>
                            {props.comments.slice(0).reverse().map((comment, i) => {
                                return (
                                    <Comment 
                                        key={i}
                                        formatDate={formatDate}
                                        {...comment}
                                        handleCommentToggle={handleCommentToggle}
                                        commentMenu={commentMenu}
                                        setCommentMenu={setCommentMenu}
                                        updateComment={props.updateComment} 
                                        setUpdateComment={props.setUpdateComment}
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