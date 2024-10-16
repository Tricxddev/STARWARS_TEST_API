const infoFxn=require("../controller/getInfomationCon")
const express = require("express")
const router= express.Router()

router.get("/information",infoFxn)

module.exports=router