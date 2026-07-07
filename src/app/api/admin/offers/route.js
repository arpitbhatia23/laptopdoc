import { NextResponse } from "next/server";
import Offer from "@/models/offer.model";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/option";
import dbConnect from "@/utils/dbConnect";
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const offers = await Offer.find({}).sort({ priority: -1, createdAt: -1 });
    return NextResponse.json(offers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch offers" },
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
    const offer = await Offer.create(body);
    return NextResponse.json(offer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create offer" },
      { status: 500 },
    );
  }
}
