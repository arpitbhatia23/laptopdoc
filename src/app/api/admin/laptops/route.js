import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/option";
import dbConnect from "@/utils/dbConnect";
import resellLaptopSchema from "@/models/resellLaptop.schema";
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const laptops = await resellLaptopSchema.find({}).sort({ createdAt: -1 });
    return NextResponse.json(laptops);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch laptops" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    console.log(body);
    if (!body.slug && body.title) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }

    const laptop = await resellLaptopSchema.create(body);
    return NextResponse.json(laptop, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create laptop" },
      { status: 500 },
    );
  }
}
