const {starships}=require("../module/starwars_db")

const starshipfxn = async(req,res)=>{
    try{
        const {name,model,manufacturer,cost_in_credits,
            length,max_atmosphering_speed,crew,passengers,cargo_capacity,
            consumables,hyperdrive_rating,MGLT,starship_class,pilots,films}=req.body

        const newStarship = new starships({name,model,manufacturer,cost_in_credits,
            length,max_atmosphering_speed,crew,passengers,cargo_capacity,
            consumables,hyperdrive_rating,MGLT,starship_class,pilots,films});

        const saveStarship = await newStarship.save();

        if(!saveStarship){return res.status(400).json({msg:"FAILED TO SAVE STARSHIP DATA"})}

        return res.status(200).json({
        msg:"SUCCESSFUL",
        starship:saveStarship
        })

    }catch(error){return res.status(400).json({msg:error.message})}
};

module.exports=starshipfxn