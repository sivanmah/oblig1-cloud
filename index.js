const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const Student = require('./student.js')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','register.html'));
    console.log(req.header('User-Agent'))
});
app.get('/view', (req,res) => {
    res.sendFile(path.join(__dirname,'public','view.html'));
    console.log(req.header('User-Agent'))
});