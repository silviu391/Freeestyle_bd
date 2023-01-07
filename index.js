const config = require ('./config');
const express = require('express');
const router = require ('./routes/userRoutes');
const { default: mongoose } = require('mongoose');
const app = express()
const port = 3000;


mongoose.connect(config.dataBaseConnectionUrl);

mongoose.Promise=global.Promise;

var db=mongoose.connection;

db.on('connected',function(){
  console.log('Database connected succesfully ')
});

db.on('error',function(err){
    console.log('Database cannot connect ' + err)
});

app.use(express.json());
app.use("/",router);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})