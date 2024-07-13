import mongoose, { Schema } from "mongoose";


const projectSchema = new Schema(
    {
        title:String,
        description:String,
        imageUrl:String,
        link:String,
        gitLink: String,

    },
    {
        timestamps: true,
    }
)

const Project = mongoose.model("Project", projectSchema);
export default Project;