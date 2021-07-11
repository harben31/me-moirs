import PostsForm from '../components/PostsForm/PostsForm';
import OldPost from '../components/OldPost';
import React, { useState, useContext, useEffect, useParams } from 'react';
import API from '../utils/API';
import TabForm from '../components/TabForm/TabForm';


 export default function NewTab(props) {
    //  console.log(props);
    console.log(props.location.state);
   
    // const [show, setShow] = useState(false);
    const [tabId, setTabId] = useState('');
    // const [tabTitle, setTabTitle] = useState('');
    // const [tabDescription, setTabDescription] = useState('');
    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    // const [postInfo, setPostInfo] = useState();
    // const [postTop, setPostTop] = useState('');
    // const [postBottom, setPostBottom] = useState('');



    useEffect(() => {
    //    await setTabId(props.location.state);
        const Id = props.location.state;
         API.getTab(Id)
            .then(res => {
                setTabInfo(res.data);
            })
            .catch(err => console.log(err));
        console.log(tabInfo);
    }, []);

    const CreatePost = (e) => {
        e.preventDefault();
        API.savePost({
            title: postTitle,
            content: postContent,
        })
        .then((res) => {

            // setTabId(res.data._id)
            // console.log(res.data);
            // setPostInfo(res.data)
            // setPostTop(res.data.title);
            // setPostBottom(res.data.content);

        })
        .catch(err => {
            console.log(err)
        })
    };


    // const CreateTab = (e) => {
    //     e.preventDefault();
    //     API.saveTab({
    //         title: tabTitle,
    //         description: tabDescription,
    //         //added this so the id stored in state is passed up as user_id
    //         user_id: props.user
    //     })
    //     .then((res) => {
        
    //         setTabInfo(res.data);
    //         setShow(!show)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // };
    console.log(tabInfo);
    return (
        <div className= 'new-tabs'>
            {/* {
                show ? (  */}
                    <div className='tabBody'>
                        <aside className='description'>
                            {/* <h3>About {tabInfo.title}</h3>
                            <p>
                                {tabInfo.description}
                            </p> */}
                        </aside>
                        <section className='postSection'>
                            <PostsForm
                            setPostContent={setPostContent}
                            setPostTitle={setPostTitle}
                            createPost={CreatePost}
                            />
                            {/* {tabInfo.posts.length ? (tabInfo.posts.map((post) => {

                                return (
                            {tabInfo.shortTabInfo.length ? (
                                tabInfo.shortTabInfo.map((post, i) => {
                                    return (
                                        <OldPost 
                                            key={i}
                                            // {...post}
                                            title={post.title}
                                            content={post.content}    
                                        />
                                    )
                                })
                            ) : ( */}

                                <h4>Create Your First Post Above!</h4>
                            {/* )} */}
                                    
                                {/* )
                                
                            }))
                                 : 
                                <h4>Create Your First Post Above!</h4>
                            } */}
                        </section> 
                        </div>
                    {/* </div>) : (<TabForm 
                    CreateTab={CreateTab}
                    setTabTitle={setTabTitle} 
                    setTabDescription={setTabDescription}
                    show={show}
                    setShow={setShow}
                    />
                ) */}
             
        </div>
    )
}

