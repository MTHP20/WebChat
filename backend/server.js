const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("API is Running");
})

app.listen(5000, () => {
    console.log("Server Started on PORT 5000");
});