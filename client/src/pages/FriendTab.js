import FriendOldPost from '../components/FriendOldPost';
import React, { useState, useEffect } from 'react';
import API from '../utils/API';

export default function NewTab(props) {

    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [post, setPost] = useState(false);
    const [comment, setComment] = useState(false);
    const [update, setUpdate] = useState(false);
    const [updateComment, setUpdateComment] = useState(false);
    const [updatePostImage, setUpdatePostImage] = useState(false);
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
                    {tabInfo ? 
                    (
                        <div>
                            <h3>About <b className='tabTitle'>{tabInfo.title}</b></h3>
                        <p>
                            {tabInfo.description}
                        </p> 
                        </div>
                    ) : null}
                </aside>
                <section className='postSection'>
                    {tabInfo ? 
                        (tabInfo.posts ? (tabInfo.posts.slice(0).reverse().map((post, i) => {
                            return (
                                <FriendOldPost 
                                    key={i}
                                    {...post} 
                                    user_id={props.user_id}
                                    username={props.username}
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
                        })) : null) 
                        : null
                    }
                </section> 
            </div>
        </div>
    )
};