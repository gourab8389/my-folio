import connectMongoDB from "@/lib/mongoose";
import Project from "@/models/projectSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { title, description, imageUrl, gitLink, link } = await req.json();
        await connectMongoDB();
        await Project.create({ title, description, imageUrl, gitLink, link });
        return NextResponse.json({ message: "Project Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ message: "Failed to create project" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const projects = await Project.find();
        return NextResponse.json({ projects });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ message: "Failed to fetch projects" }, { status: 500 });
    }
}
