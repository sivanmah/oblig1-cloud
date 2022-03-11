const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const Student = require('./models/student.js');
uri = 'mongodb+srv://sivansm:admin@cluster0.9pkzk.mongodb.net/oblig1?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) throw err
    console.log("Connected to MongoDB")
})
const db = mongoose.connection;


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.post('/sign_up', function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var studentid = req.body.studentid;
    var age =req.body.age;
    var nationality = req.body.nationality;
    var degree =req.body.degree;
  
    var data = {
        "fname": fname,
        "lname":lname,
        "studentid":studentid,
        "age":age,
        "nationality":nationality,
        "degree":degree
    }
    db.collection('student').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log(`Record for "${data.fname} ${data.lname}" inserted Successfully`);
              
    });
    return res.redirect('/registered_success');

})


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','register.html'));
    console.log(req.header('User-Agent'))

});
app.get('/registered_success', (req,res) => {
    res.sendFile(path.join(__dirname,'public','register_success.html'));
    console.log(req.header('User-Agent'))

});
app.get('/view', (req,res) => {
    res.sendFile(path.join(__dirname,'public','view.html'));
    console.log(req.header('User-Agent'))
});