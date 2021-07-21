import PostsForm from '../components/PostsForm/PostsForm';
import OldPost from '../components/OldPost';
import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import TabDotIcon from '../components/TabDotIcon';
import ImageThumbnail from '../components/ImageThumbnail';

export default function NewTab(props) {

    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [post, setPost] = useState(false);
    const [comment, setComment] = useState(false);
    const [update, setUpdate] = useState(false);
    const [updateComment, setUpdateComment] = useState(false);
    const [updatePostImage, setUpdatePostImage] = useState(false);
    const [showTabDelete, setShowTabDelete] = useState(false);
    const [tabMenu, setTabMenu] = useState(false);
    const [tabUpdate, setTabUpdate] = useState(false);
    const [target, setTarget] = useState(false);
    const [postChanged, setPostChanged] = useState(false);

    useEffect(() => {
        const Id = props.match.params.id;
         API.getTab(Id)
            .then(res => {
                setTabInfo(res.data);
                setPostChanged(false);
                setUpdatePostImage(false);

            })
            .catch(err => console.log(err));
    }, [props.match.params.id, post, comment, update, updateComment, postChanged, updatePostImage]);

    const CreatePost = (e) => {
        e.preventDefault();
        API.savePost({
            title: postTitle,
            content: postContent,
            tab_id: tabInfo._id
        })
        .then(() => {
            setPost(true)})
        .catch(err => {
            console.log(err);
        });
    };

    const UpdatePost = (e, _id) => {
        e.preventDefault();
        API.updatePost(_id, {
            title: postTitle,
            content: postContent
        })
        .then(res => {
            setPostChanged(true);
            props.history.push('/newtab/' + props.match.params.id);
        })
        .catch(err => console.log(err));
    };

    const handleTabToggle = () => {
        if (!tabMenu) {
            setTabMenu(true);
            setShowTabDelete(false);
        } else {
            setTabMenu(false);
            setShowTabDelete(false);
        }
    };

    const followTab = () => {
        API.followTab(props.user_id, {
            tab_id: tabInfo._id,
            follow: true
        })
        .then()
        .catch(err => console.log(err));
    };


    return (
        <div className= 'new-tabs'>
                    <div className='tabBody'>
                        <aside className='description'>
                            <TabDotIcon 
                                showTabDelete={showTabDelete}
                                setShowTabDelete={setShowTabDelete}
                                tabMenu={tabMenu}
                                handleTabToggle={handleTabToggle}    
                                _id={props.match.params.id}
                                setTabUpdate={setTabUpdate}
                                tabUpdate={tabUpdate}
                            />
                            {tabInfo ? (
                                <div>
                                    <h3>About <b className='tabTitle'>{tabInfo.title}</b></h3>
                                    <p>
                                        {tabInfo.description}
                                    </p> 
                                    
                                </div>
                            ) : null}
                            <div className='imgDiv'>
                                {tabInfo ? (tabInfo.posts ? (tabInfo.posts.map((post, i) => {
                                    console.log('image post');
                                    if(post.image) {
                                        return (
                                            <ImageThumbnail 
                                                key={i}
                                                image={post.image}
                                                title={post.title}
                                            />
                                        )
                                    }
                                })): null): null}  
                            </div>
                            
                        </aside>
                        <section className='postSection'>
                            <PostsForm
                            setPostContent={setPostContent}
                            setPostTitle={setPostTitle}
                            createPost={CreatePost}
                            setPostChanged={setPostChanged}
                            postChanged={postChanged}
                            />
                            {tabInfo ? (tabInfo.posts ? (tabInfo.posts.slice(0).reverse().map((post, i) => {
                                    return (
                                        <OldPost 
                                            key={i}
                                            {...post} 
                                            user_id={props.user_id}
                                            username={props.username}
                                            UpdatePost={UpdatePost}
                                            update={update}
                                            setUpdate={setUpdate}
                                            setComment={setComment}
                                            updateComment={updateComment}
                                            setUpdateComment= {setUpdateComment}
                                            setUpdatePostImage={setUpdatePostImage}
                                            setPostTitle={setPostTitle}
                                            setPostContent={setPostContent}
                                        />
                                    )
                                })) : 
                                null
                            ) :
                                null
                            }
                        </section> 
                    </div>
        </div>
    )
};