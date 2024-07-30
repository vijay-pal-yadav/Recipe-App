import mongoose from "mongoose";

const RecipeSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    instructions: {type: String, required: true,},
    imageUrl: {type: String, required: true,},
    cookingTime: {type: Number, required: true,},
    userOwner: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    ingredients:[{               // arr of ingredients
        type: String,
        required: true,
    }]
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema)