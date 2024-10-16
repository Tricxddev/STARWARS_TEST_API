const {starships,planet}=require("../module/starwars_db")

const infoFxn = async(req,res)=>{
    try{
        const {name}=req.body
        const findStarShip = await starships.findOne({name})
        if(!findStarShip){
            return res.status(200).json({
                starship:{},
            })
        };

        const crew = parseInt(findStarShip.crew.replace(/,/g,''),10)  ;
        if(!crew){
            return res.status(200).json({
                crew:0,
            })
        };

        const LeiaOnPlanet = await planet.findOne({residents:"Leia Organa"});

        const isLeiaOnPlanet = !!LeiaOnPlanet;

        const model = findStarShip.model;
       
        return res.status(200).json({
            starship:{name,model},
            crew: crew,
            isLeiaOnPlanet
        })
    }catch(error){return res.status(400).json({msg:error.message})}
    
};

module.exports=infoFxn