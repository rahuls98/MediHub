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

const ExpertModel = {
    createExpert
};
  
export default ExpertModel;
