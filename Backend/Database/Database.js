const mongoose= require("mongoose");
const app = require("../app");
const URL = process.env.DATABASE;

mongoose.set("strictQuery", false);
const connection = mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology:true})
                    .then(()=>{console.log("DB connected")})
                    .catch( (err)=>{
                        console.log("Errror in DB connection!!!")
                        process.exit(1)
                    })

exports.connect = () => {connection}