const mongoose=require("mongoose")


const   starshipSchema = new mongoose.Schema({
    
    name:{type:String,required:true},
    model:{type:String,required:true},
    manufacturer:{type:String,required:true},
    cost_in_credits:{type:String,required:true},
    length:{type:String,required:true},
    max_atmosphering_speed:{type:String,required:true},
    crew:{type:String,required:true},
    passengers:{type:String,required:true},
    cargo_capacity:{type:String,required:true},
    consumables:{type:String,required:true},
    hyperdrive_rating:{type:String,required:true},
    MGLT:{type:String,required:true},
    starship_class:{type:String,required:true},
    pilots:[{type:String}],
    films:[{type:String,required:true}]
    
});

const starships = new mongoose.model("starships",starshipSchema);

const peopleShcma= new mongoose.Schema({
    name:{type:String,required:true},
    height:{type:String},
    mass:{type:String},
    hair_color:{type:String},
    skin_color:{type:String},
    eye_color:{type:String},
    birth_year:{type:String},
    gender:{type:String},
    homeworld:{type:String},
    films:[{type:String}],
    species:[{type:String}],
    vehicles:[{type:String}],
    starships:[{type:String}]
});

const people = new mongoose.model("people",peopleShcma);

const planetSchema= new mongoose.Schema({
    name:{type:String,required:true},
    rotation_period:{type:String,required:true},
    orbital_period:{type:String,required:true},
    diameter:{type:String,required:true},
    climate:{type:String,required:true},
    gravity:{type:String,required:true},
    terrain:{type:String,required:true},
    surface_water:{type:String,required:true},
    population:{type:String,required:true},
    residents:[{type:String,required:true}],
    films:[{type:String,required:true}]
})
const planet = new mongoose.model("planet",planetSchema);

module.exports={starships,people,planet}