const {people}=require("../module/starwars_db")

const peoplefxn = async(req,res)=>{
    try{
        const {name,height,mass,
            hair_color,skin_color,eye_color,birth_year,gender,
            homeworld,films,species,vehicles,starships}=req.body
        const newPeople = new people({name,height,mass,
            hair_color,skin_color,eye_color,birth_year,gender,
            homeworld,films,species,vehicles,starships});

        const savePeople = await newPeople.save();

        if(!savePeople){return res.status(400).json({msg:"FAILED TO SAVE PEOPLE DATA"})}

        return res.status(200).json({
        msg:"SUCCESSFUL",
        peopleDetails:savePeople
        })
    }catch(error){return res.status(400).json({msg:error.message})}
};

module.exports=peoplefxn