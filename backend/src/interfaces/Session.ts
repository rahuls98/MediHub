interface SessionInterface {
    _id:string,
    _doc:object,
    author:string,
    interestedUsers:object[],
    topics:string[],
    createdDate:Date,
    title:string,
    description:string,
    sessionDate:string,
    sessionTime:string,
    enrolled:boolean
}

export default SessionInterface;