const starshipfxn =require("../controller/starShipCon")
const express = require("express")
const  router = express.Router()



router.post("/starship",starshipfxn)

module.exports=router