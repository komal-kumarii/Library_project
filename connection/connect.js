const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/library',{
    useNewUrlParser: true,useUnifiedTopology: true
})


.then(()=>{
    console.log("successfully connect-----")
})

.catch((err)=>{
    console.log(err)
})
