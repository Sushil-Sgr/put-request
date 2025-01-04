import express from 'express';
import mongoose from 'mongoose';
import Chat from './models/Chat.js';
const app = express();
const port = 3000;
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import { log } from 'console';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agar static path ko manually setup karna ho
app.use(express.static(path.join(__dirname, 'public')));
// Connect to MongoDB

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
    console.log('Connected to MongoDB');
}

main().catch(err => console.log(err));

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
app.get('/Chats', async (req, res) => {
    let chats = await Chat.find();
    res.render('chats.ejs', { chats });
})
app.post('/Chats', (req, res) => {
    let { from, message, to } = req.body;
    let chat = new Chat({
        from: from,
        to: to,
        message: message,
        time: new Date()
    });
    chat.save().then(() => {
        console.log('Chat saved');
    }).catch(err => {
        console.log(err);
    });
    res.redirect('/chats');

})


// update route
app.put('/Chats/:id', async (req, res) => {
    let { id } = req.params;
    let { message : newMessage } = req.body;
    console.log(newMessage);
    
    let updatesChat = await Chat.findByIdAndUpdate(id,{message: newMessage },{runValidators: true,new: true});
    console.log(updatesChat);
    res.redirect('/chats');
})

//Destroy route
app.delete('/Chats/:id', async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})

app.get('/Chats/new', (req, res) => {
    res.render('new.ejs');
})



app.get('/Chats/:id/edit', async (req, res) => {
    let id = req.params.id;
    let chats = await Chat.findById(id)
    res.render('edit.ejs', { chats });
})
