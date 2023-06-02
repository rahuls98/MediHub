const mongoose = require('mongoose');
import ExpertSchema from "../schemas/Expert";

const Expert = mongoose.model('Expert', ExpertSchema);

const createExpert = async (
    fullname:string, 
    email:string, 
    pangeaUserId:string, 
    expertiseTopics:string[]
) => {
    try {
        const expert = new Expert({
            fullname,
            email,
            pangeaUserId,
            expertiseTopics,
        });
        await expert.save();
    } catch (error) {
        console.error('Error createExpert: ', error);
    }
};

const readExperts = async () => {
    try {
        return await Expert.find();
    } catch (error) {
        console.error('Error readExperts: ', error);
    }
}

const readExpertsById = async (
    expertIds:string[]
) => {
    try {
        const objectIdExpertIds = expertIds.map(id => new mongoose.Types.ObjectId(id));
        const experts:object[] = await Expert.find({ _id: { "$in": objectIdExpertIds } });
        return experts;
    } catch (error) {
        console.error('Error readExpertsById: ', error);
    }
}

const increaseFollowerCount = async (expertId:string) => {
    try {
        await Expert.updateOne({ _id: expertId }, {$inc : {followerCount : 1}})
    } catch (error) {
        console.error('Error increaseFollowerCount: ', error);
    }
}

const decreaseFollowerCount = async (expertId:string) => {
    try {
        await Expert.updateOne({ _id: expertId }, {$inc : {followerCount : -1}})
    } catch (error) {
        console.error('Error increaseFollowerCount: ', error);
    }
}

const ExpertModel = {
    createExpert,
    readExperts,
    readExpertsById,
    increaseFollowerCount,
    decreaseFollowerCount
};
  
export default ExpertModel;
