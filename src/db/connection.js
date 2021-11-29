const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registrationform"
).then(() =>{
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`error`);
})