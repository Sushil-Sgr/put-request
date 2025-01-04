import mongoose from 'mongoose';
import Chat from './models/Chat.js';



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
    console.log('Connected to MongoDB');
}

main().catch(err => console.log(err));


let allChat = [
    {
        from: 'Sagar',
        to: 'Aakash',
        message: 'Hello',
        time: new Date()
    },
    {
        from: 'Aakash',
        to: 'Sagar',
        message: 'Hi',
        time: new Date()
    },
    {
        from: 'Sagar',
        to: 'Aakash',
        message: 'How are you?',
        time: new Date()
    },
    {
        from: 'Aakash',
        to: 'Sagar',
        message: 'I am fine',
        time: new Date()
    },
    {
        from: 'Sagar',
        to: 'Aakash',
        message: 'Good to hear that',
        time: new Date()
    },
    {
        from: 'Aakash',
        to: 'Sagar',
        message: 'How about you?',
        time: new Date()
    },
    {
        from: 'Sagar',
        to: 'Aakash',
        message: 'I am good too',
        time: new Date()
    },
    {
        from: 'Aakash',
        to: 'Sagar',
        message: 'That is great',
        time: new Date()
    },
    {
        from: 'Sagar',
        to: 'Aakash',
        message: 'Bye',
        time: new Date()
    },
    {
        from: 'Aakash',
        to: 'Sagar',
        message: 'Goodbye',
        time: new Date()
    }
]

Chat.insertMany(allChat)