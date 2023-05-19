const mongoose = require('mongoose');
import MedicalExpertSchema from "../schemas/MedicalExpert";

const MedicalExpert = mongoose.model('MedicalExpert', MedicalExpertSchema);

const createMedicalExpert = async (
    fullname:string, 
    email:string, 
    pangeaUserId:string, 
    expertiseTopics:string[]
) => {
    try {
        const medicalExpert = new MedicalExpert({
            fullname,
            email,
            pangeaUserId,
            expertiseTopics,
        });
        await medicalExpert.save();
    } catch (error) {
        console.error('Error creating medical expert:', error);
    }
};

const MedicalExpertModel = {
    createMedicalExpert
};
  
export default MedicalExpertModel;
