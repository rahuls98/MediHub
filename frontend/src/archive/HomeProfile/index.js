import "./style.css";

const HomeProfile = () => {
    return <div className="HomeProfile_container">
        <div className="HomeProfile_banner"></div>
        <div className="HomeProfile_image_container">
            <div className="HomeProfile_image"></div>
        </div>
        <div className="HomeProfile_description">
            <p className="HomeProfile_name">Name</p>
            <p className="HomeProfile_username">Username</p>
            <p className="HomeProfile_headline">Headline</p>
        </div>
        <hr />
        <div className="HomeProfile_following">
            <p className="HomeProfile_following_title">Following</p>
            <div className="HomeProfile_following_metrics">
                <div className="HomeProfile_following_experts">
                    <span>100</span>
                    <br/>
                    <span className="HomeProfile_following_category">Experts</span>
                </div>
                <div className="HomeProfile_following_topics">
                    <span>200</span>
                    <br/>
                    <span className="HomeProfile_following_category">Topics</span>
                </div>
            </div>
        </div>
        {/* <hr />
        <p>My profile</p> */}
    </div>
}

export default HomeProfile;