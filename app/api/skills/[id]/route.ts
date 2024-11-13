import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongoose";
import Skills from "@/models/skills-schema";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { title, imageUrl } = await req.json();
        await connectMongoDB();
        
        const updatedSkill = await Skills.findByIdAndUpdate(
            id,
            { title, imageUrl },
            { new: true }
        );

        if (!updatedSkill) {
            return NextResponse.json({ message: "Skill not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Skill updated" }, { status: 200 });
    } catch (error) {
        console.error("Error updating skill:", error);
        return NextResponse.json({ message: "Failed to update skill" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await connectMongoDB();
        
        const deletedSkill = await Skills.findByIdAndDelete(id);

        if (!deletedSkill) {
            return NextResponse.json({ message: "Skill not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Skill deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting skill:", error);
        return NextResponse.json({ message: "Failed to delete skill" }, { status: 500 });
    }
}