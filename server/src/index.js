import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter)

await mongoose.connect("mongodb+srv://vrao88104:UKy5DKGCNEuiO3Ev@recipes.clsnakm.mongodb.net/recipes");

app.listen(3001,()=> 
    console.log("server started!")
);

