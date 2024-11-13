import { Schema, model, models } from "mongoose";

const skillsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Skills = models.Skills || model("Skills", skillsSchema);

export default Skills;
