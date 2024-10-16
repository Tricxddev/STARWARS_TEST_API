const peoplefxn=require("../controller/peoPleCon")
const express = require("express")
const router=express.Router()

router.post("/people",peoplefxn)

module.exports=router