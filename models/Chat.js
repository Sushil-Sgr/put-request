import mongoose from 'mongoose';
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true   
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        
    },
    time: {
        type: Date,
        required: true
    }
}) 
const Chat = mongoose.model("Chat",chatSchema)

export default Chat;