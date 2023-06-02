import { useEffect, useState } from "react";
import "./style.css";
import FeedPost from "../../components/FeedPost";
import postApis from "../../apis/post";
import NoData from "../../components/NoData";

const SavedLayoutContent = () => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const getSavedPosts = async () => {
            const posts = await postApis.getSavedPosts();
            console.log(posts);
            setSaved(posts);
        }
        getSavedPosts();
    }, [])

    return <div className="SavedLayoutContent_container">
        {
            (saved.length === 0)?
            <NoData />:
            saved.map((post, ind) => <FeedPost key={ind} saved post={post}/>)
        }
    </div>
}

export default SavedLayoutContent;
