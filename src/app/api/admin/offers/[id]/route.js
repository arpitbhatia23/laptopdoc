import { NextResponse } from "next/server";
import Offer from "@/models/offer.model";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/option";
import dbConnect from "@/utils/dbConnect";
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const offer = await Offer.findByIdAndUpdate(id, body, { new: true });
    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json(offer);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update offer" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const offer = await Offer.findByIdAndDelete(id);
    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Offer deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete offer" },
      { status: 500 },
    );
  }
}
