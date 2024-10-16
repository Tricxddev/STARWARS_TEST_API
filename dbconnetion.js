const mongoose=require("mongoose")

const dbconnect = async()=>{
    try{
        mongoose.connect(`${process.env.dblink}`)
        .then(()=>{
            console.log("DATABASE NOW CONNECT")
        })
    }catch(error){return res.status(400).json({msg:error.message})}
};

module.exports=dbconnect