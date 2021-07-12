import PostsForm from '../components/PostsForm/PostsForm';
import OldPost from '../components/OldPost';
import React, { useState, useContext, useEffect } from 'react';
import API from '../utils/API';
import TabForm from '../components/TabForm/TabForm';


 export default function NewTab(props) {
   
    const [show, setShow] = useState(false);
    const [tabId, setTabId] = useState('');
    const [tabTitle, setTabTitle] = useState('');
    const [tabDescription, setTabDescription] = useState('');
    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postInfo, setPostInfo] = useState();
    const [postId, setPostId] = useState();
    const [postTop, setPostTop] = useState('');
    const [postBottom, setPostBottom] = useState('');

    // useEffect(() => {
    //     API.getTab(tabId)
    //         .then(res => {
    //             setTabInfo(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    const CreatePost = (e) => {
        e.preventDefault();
        API.savePost({
            title: postTitle,
            content: postContent,
            tab_id: tabInfo._id
        })
        .then((res) => {
            console.log(res.data);
            setPostId(res.data._id);
            setPostInfo(res.data);
            setPostTop(res.data.title);
            setPostBottom(res.data.content);
        })
        .catch(err => {
            console.log(err)
        })
    };

    const CreateTab = (e) => {
        e.preventDefault();
        API.saveTab({
            title: tabTitle,
            description: tabDescription,
            //added this so the id stored in state is passed up as user_id
            user_id: props.userId
        })
        .then((res) => {
        
            setTabInfo(res.data);
            setShow(!show)
        })
        .catch(err => {
            console.log(err)
        })
    };

    const deleteTab = () => {
        API.deleteTab(tabInfo._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div className= 'new-tabs'>
            {
                show ? ( 
                    <div className='tabBody'>
                        <aside className='description'>
                            <div className='delTabWrap'>
                                <button
                                className='delTabBtn'
                                onClick={deleteTab}
                                >
                                    Delete
                                </button>
                            </div>
                            <h3>About {tabInfo.title}</h3>
                            <p>
                                {tabInfo.description}
                            </p>
                        </aside>
                        <section className='postSection'>
                            <PostsForm
                            setPostContent={setPostContent}
                            setPostTitle={setPostTitle}
                            createPost={CreatePost}
                            />
                            {/* {tabInfo.posts.length ? (tabInfo.posts.map((post) => {
                                return ( */}
                            {postTop && postBottom ? (
                                <OldPost 
                                        // key={post.id}
                                        // {...post}
                                        postId={postId}
                                        title={postTitle}
                                        content={postContent}
                                        username={props.username}
                                        userId={props.userId}
                                    />
                            ) : (
                                <h4>Create Your First Post Above!</h4>
                            )}
                                    
                                {/* )
                                
                            }))
                                 : 
                                <h4>Create Your First Post Above!</h4>
                            } */}
                        </section> 
                    </div>) : (<TabForm 
                    CreateTab={CreateTab}
                    setTabTitle={setTabTitle} 
                    setTabDescription={setTabDescription}
                    show={show}
                    setShow={setShow}
                    />
                )
            } 
        </div>
    )
}

