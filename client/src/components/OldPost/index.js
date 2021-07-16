import React, { useState, useEffect } from 'react';
import DeleteModal from '../DeleteModal';
import DotIcon from '../DotIcon';
import Likes from '../Likes';
import Comment from '../Comment';
import CommentButton from '../CommentButton';
import CommentBox from '../CommentBox';
import './style.css';
import API from '../../utils/API';


export default function OldPost(props) {
    const [commentActivated, setCommentActivated] = useState(false);
    const [menu, setMenu] = useState(false);
    const [commentMenu, setCommentMenu] = useState(false);
    const [postImage, setpostImage] = useState('');
    const [updateImage, setUpdateImage] = useState(props.image);

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
      
      useEffect(() => {
        console.log(props._id, postImage)
        if (postImage) {
        API.addPostImage(props._id, postImage)
        .then ((data) => {
         API.getPost(props._id) 
        .then((res) => {
            console.log(res.data[0].image)
            setUpdateImage(res.data[0].image)
            // window.location.reload()
        }).catch(err => console.log(err))   
        
        }).catch(err => console.log(err)) 
      }

    }, [postImage, updateImage]);

    

    console.log(props)
    const postImages = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'postpics');
    
        const res = await fetch("https://api.cloudinary.com/v1_1/ddahipzkn/image/upload", 
        {
            method: 'POST',
            body: data
        });
    
        const file = await res.json();
        console.log(file);
    
        setpostImage(file.url);
    
      }

    return (
        <div className='oldPost'>
            <img className='oldPostImage' src={updateImage} alt=''/>
            <DeleteModal showDelete={props.showDelete}/>
            <div className='oldPostContent'>
                <div className='postTop'>
                    <p className='postDate'>
                        {formatDate(props.date)}
                    </p>
                    <DotIcon handleToggle={handleToggle} menu={menu} _id={props._id} setUpdate={props.setUpdate} update={props.update} postImages={postImages}/>
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