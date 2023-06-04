interface PostInterface {
    _id:string,
    _doc:object,
    author:string,
    createdDate:Date,
    profilePhoto:string,
    topics:string[],
    content:string,
    upvotes:string[],
    downvotes:string[],
    savedBy:string[],
    saved:boolean
}

export default PostInterface;