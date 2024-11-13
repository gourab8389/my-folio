import connectMongoDB from "@/lib/mongoose";
import Skills from "@/models/skills-schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { title, imageUrl } = await req.json();
        await connectMongoDB();
        await Skills.create({ title, imageUrl });
        return NextResponse.json({ message: "Project Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ message: "Failed to create project" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const skills = await Skills.find();
        return NextResponse.json({ skills });
    } catch (error) {
        console.error("Error fetching skills:", error);
        return NextResponse.json({ message: "Failed to fetch skills" }, { status: 500 });
    }
}
