const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("API is Running");
})

app.get('/api/chat', (req,res) => {
    res.send()
})

app.get('/api/chat/:id', (req,res) => {
    // console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

app.listen(5000, () => {
    console.log("Server Started on PORT 5000");
});