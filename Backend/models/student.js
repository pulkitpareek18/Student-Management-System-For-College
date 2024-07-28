import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone:{
        type: Number
    },
    rollNo:{
        type: String,
        required: true
    },
    father:{ 
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phone: {   
            type: Number
        },
    },
    mother: {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String    
        },
        phone:{
            type: Number
        }
    },
    academics: {
        class10th: {
            schoolName:{
                type: String,
                required: true
            },
            percentage:{
                type: Number,
                required: true
            },
        },
        class12th: {
            schoolName:{
                type: String,
                required: true
            },
            percentage:{
                type: Number,
                required: true
            },
        }

    }
});

export const Student = mongoose.model('Student', studentSchema);
