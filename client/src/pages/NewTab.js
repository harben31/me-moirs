import PostsForm from '../components/PostsForm/PostsForm';
import OldPost from '../components/OldPost';
import React, { useState, useContext, useEffect, useParams } from 'react';
import API from '../utils/API';
import TabForm from '../components/TabForm/TabForm';
// import { updateTab } from '../../../controllers/tabControllers';


 export default function NewTab(props) {
     console.log(props.match.params.id);
    // console.log(props.location.state);
   
    // const [show, setShow] = useState(false);
    const [tabId, setTabId] = useState('');
    // console.log(props.location.state);
    // const [tabTitle, setTabTitle] = useState('');
    // const [tabDescription, setTabDescription] = useState('');
    const [tabInfo, setTabInfo] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    // const [postInfo, setPostInfo] = useState();
    // const [postTop, setPostTop] = useState('');
    // const [postBottom, setPostBottom] = useState('');
    const [post, setPost] = useState();

    let Id;

    useEffect(() => {
    //    await setTabId(props.location.state);
        const Id = props.match.params.id;
         API.getTab(Id)
        // Id = props.location.state;
        // API.getTab(Id)
            .then(res => {
                setTabInfo(res.data);
            })
            .catch(err => console.log(err));
    }, [props.match.params.id]);

  

    const CreatePost = (e) => {
        e.preventDefault();
        API.savePost({
            title: postTitle,
            content: postContent,
            tab_id: tabInfo._id

        })
        .catch(err => {
            console.log(err)
        });
    };


    const deleteTab = () => {
        API.deleteTab(tabInfo._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };


    console.log(tabInfo);

    return (
        <div className= 'new-tabs'>
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
                     
                            {tabInfo ? (
                                <div>
                                    <h3>About <b>{tabInfo.title}</b></h3>
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
                            {tabInfo ? (tabInfo.posts ? (tabInfo.posts.map((post, i) => {
                                    return (
                                        <OldPost 
                                            key={i}
                                            {...post}  
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

