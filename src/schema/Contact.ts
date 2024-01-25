import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: String,
    email: String,
    details: String
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;