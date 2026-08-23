import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
    const filePath = path.join(process.cwd(), "src", "data", "projects.json");

    const file = await fs.readFile(filePath, "utf8");
    const projects = JSON.parse(file);

    return NextResponse.json(projects);
}
