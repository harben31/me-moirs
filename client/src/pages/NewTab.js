import PostsForm from '../components/PostsForm/PostsForm';
import OldPost from '../components/OldPost';
import React, { useState, useEffect } from 'react';
import API from '../utils/API';


 export default function NewTab(props) {

    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [post, setPost] = useState(false);
    const [comment, setComment] = useState(false);

    useEffect(() => {
        const Id = props.match.params.id;
         API.getTab(Id)
            .then(res => {
                setTabInfo(res.data);
            })
            .catch(err => console.log(err));
    }, [props.match.params.id, post, comment]);

    const CreatePost = (e) => {
        e.preventDefault();
        API.savePost({
            title: postTitle,
            content: postContent,
            tab_id: tabInfo._id
        })
        .then(() => setPost(true))
        .catch(err => {
            console.log(err);
        });
    };


    const deleteTab = () => {
        API.deleteTab(tabInfo._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    const followTab = () => {
        API.followTab(props.user_id, {
            tab_id: tabInfo._id,
            follow: true
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div className= 'new-tabs'>
                    <div className='tabBody'>
                        <aside className='description'>

                            <div className='delTabWrap'>
                                <span className='delTabBtn'
                                onClick={deleteTab} class="material-icons">
                                    delete_forever
                                </span>
                                <button
                                className='followTabBtn'
                                onClick={followTab}
                                >
                                    follow
                                </button>
                            </div>
                     
                            {tabInfo ? (
                                <div>
                                    <h3>About <b className='tabTitle'>{tabInfo.title}</b></h3>
                            <p>
                                {tabInfo.description}
                            </p> 
                                </div>
                            ) : null}
                        </aside>
                        <section className='postSection'>
                            <PostsForm
                            setPostContent={setPostContent}
                            setPostTitle={setPostTitle}
                            createPost={CreatePost}
                            />
                            {tabInfo ? (tabInfo.posts ? (tabInfo.posts.slice(0).reverse().map((post, i) => {
                                    return (
                                        <OldPost 
                                            key={i}
                                            {...post} 
                                            user_id={props.user_id}
                                            username={props.username}
                                            posts={tabInfo.posts} 
                                            setComment={setComment}
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
}

