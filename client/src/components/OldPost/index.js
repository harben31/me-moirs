import React, { useState, useEffect } from 'react';
import DeleteModal from '../DeleteModal';
import DotIcon from '../DotIcon';
import Likes from '../Likes';
import Comment from '../Comments/Comment';
import CommentButton from '../Comments/CommentButton';
import CommentBox from '../Comments/CommentBox';
import API from '../../utils/API';
import './style.css';
import { Button } from 'react-mdl';




export default function OldPost(props) {
    const [commentActivated, setCommentActivated] = useState(false);
    const [menu, setMenu] = useState(false);
    const [commentMenu, setCommentMenu] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showCommentDelete, setShowCommentDelete] = useState(false);
    const [postImage, setpostImage] = useState('');


    const [updateImage, setUpdateImage] = useState(props.image);
    const [title, setTitle] = useState();
    const [content, setContent] =useState();


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
            setShowDelete(false);
        } else {
            setMenu(false);
            setShowDelete(false);
        }
    }

    const handleCommentToggle =() => {
        if (!commentMenu) {
            setCommentMenu(true);
            setShowCommentDelete(false);
        } else {
            setCommentMenu(false);
            setShowCommentDelete(false);
        }
    }

    const formatDate = (dated) => {
        let postDate = new Date(dated);
        let date = postDate.toLocaleDateString();
        return date;
      }
      

      useEffect(() => {
        setTitle(props.title);
        setContent(props.content)
        if (postImage) {
        API.addPostImage(props._id, postImage)
        .then ((res) => {

            props.setUpdatePostImage(true)
            
        }).catch(err => console.log(err)) 
       
        }

    }, [postImage] );


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

        {
            !props.image ? (
            <div className='post-image'>
            <img className='oldPostImage' src='https://i.stack.imgur.com/y9DpT.jpg' alt=''/>
             <Button><input type='file' name='file' onChange={postImages}/></Button>
            </div>
            ) : (
            <img className='oldPostImage' src={props.image} alt=''/>
            )
         }
                
            <DeleteModal showDelete={props.showDelete}/>

            <div className='oldPostContent'>
                <div className='postTop'>
                    <p className='postDate'>
                        {formatDate(props.date)}
                    </p>
                    <DotIcon  
                        UpdatePost={props.UpdatePost}
                        showDelete={showDelete} 
                        setShowDelete={setShowDelete}
                        handleToggle={handleToggle}
                        setPostTitle={props.setPostTitle}
                        setPostContent={props.setPostContent} 
                        menu={menu}
                        setMenu={setMenu}
                        _id={props._id} 
                        setUpdate={props.setUpdate} 
                        update={props.update}
                        title={title}
                        content={content}
                        setTitleChanged={props.setTitleChanged}
                        setContentChanged={props.setContentChanged}
                    />
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
                                        setShowCommentDelete={setShowCommentDelete}
                                        showCommentDelete={showCommentDelete}
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