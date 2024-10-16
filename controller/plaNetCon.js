const {planet}=require("../module/starwars_db")

const planetFxn = async(req,res)=>{
    try{
        const {name,rotation_period,orbital_period,
            diameter,climate,gravity,terrain,surface_water,
            population,residents,films}=req.body
        const newPlanet = new planet({name,rotation_period,orbital_period,
            diameter,climate,gravity,terrain,surface_water,
            population,residents,films})
        const savePlanet = await newPlanet.save()
        if(!savePlanet){return res.status(400).json({msg:"FAILED TO SAVE PLANET DATA"})}

        return res.status(200).json({
        msg:"SUCCESSFUL",
        planetDetails:savePlanet
        })

    }catch(error){return res.status(400).json({msg:error.message})}
}

module.exports=planetFxn