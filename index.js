const express = require("express")
const dotenv = require("dotenv")
const app = express()

const dbconnect =require("./dbconnetion")
const {starships,people,planet}=require("./module/starwars_db")
const starship=require("./route/starShipRoute")
const starPeople=require("./route/peoPleRoute")
const starPlanet=require("./route/planetRoute")
const information=require("./route/infoRoute")

app.use(express.json())

dotenv.config()

dbconnect()

port_no= process.env.PORT || 3500

app.listen(port_no,(res)=>{
    console.log(`SERVER NOW RUNS ON PORT :${port_no}`)
})


//TEST
app.get("/test",(req,res)=>{
    return res.status(200).json({msg:"COMM IS SUCCESSFUL"})
})

//post starship data to database as seen on swapi.dev documentation
app.use(starship);

//post people data to database as seen on swapi.dev documentation
app.use(starPeople);

//post planet data to database as seen on swapi.dev documentation
app.use(starPlanet);


//infomation request API
app.use(information)