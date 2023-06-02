import { useEffect, useState } from "react";
import "./style.css";
import FeedPost from "../../components/FeedPost";
import postApis from "../../apis/post";
import NoData from "../../components/NoData";

const SavedLayoutContent = () => {
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        const getSavedPosts = async () => {
            const posts = await postApis.getSavedPosts();
            setSavedPosts(posts);
        }
        getSavedPosts();
    }, [])

    return <div className="SavedLayoutContent_container">
        {
            (savedPosts?.length === 0)?
            <NoData />:
            savedPosts.map((post, ind) => <FeedPost key={ind} saved post={post}/>)
        }
    </div>
}

export default SavedLayoutContent;
