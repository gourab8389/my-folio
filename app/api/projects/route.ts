import connectMongoDB from "@/lib/mongoose";
import Project from "@/models/projectSchema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){
    const {title, description, imageUrl, gitLink,link} = await req.json();
    await connectMongoDB();
    await Project.create({title,description,imageUrl, gitLink,link});
    return NextResponse.json({message: "Project Created"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const projects = await Project.find();
    return NextResponse.json({projects});
}