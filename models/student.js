const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please write your first name.']
    },
    lname: {
        type: String,
        required: [true, 'Please write your last name.']
    },
    studentid: {
        type: Number,
        required: [true, 'Please write your student ID.']
    },
    age: {
        type: Number,
        required: [true, 'Please write your age.']
    },
    nationality: {
        type: String,
        required: [true, 'Please write your nationality.']
    },
    degree: {
        type: String,
        required: [true, 'Please write your degree.']
    }
},
{
    //Will add a timestamp whenever a new student is added
    timestamps: true
}
)

module.exports = mongoose.model('Student', studentSchema);