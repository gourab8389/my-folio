import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongoose";
import Projects from "@/models/projectSchema";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { title, description, imageUrl, gitLink, link } = await req.json();
        await connectMongoDB();
        
        const updatedProject = await Projects.findByIdAndUpdate(
            id,
            { title, imageUrl, description, gitLink, link },
            { new: true }
        );

        if (!updatedProject) {
            return NextResponse.json({ message: "Project not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Project updated" }, { status: 200 });
    } catch (error) {
        console.error("Error updating project:", error);
        return NextResponse.json({ message: "Failed to update project" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await connectMongoDB();
        
        const deletedProjects = await Projects.findByIdAndDelete(id);

        if (!deletedProjects) {
            return NextResponse.json({ message: "Projects not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Projects deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json({ message: "Failed to delete project" }, { status: 500 });
    }
}