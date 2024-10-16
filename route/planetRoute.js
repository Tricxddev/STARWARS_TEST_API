const express = require("express")
const router = express.Router()
const planetFxn=require("../controller/plaNetCon")


router.post("/planet",planetFxn)


module.exports=router