import apiError from "@/utils/apiError";
import { apiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { sendemail } from "@/utils/nodemalier";
import { NextResponse } from "next/server";
const handler = async (req) => {
  try {
    const { name, email, phone, message, device, service } = await req.json();
    if (!name || !email || !phone || !message || !device || !service) {
      throw new apiError(400, "all fleid are required");
    }

    await sendemail({ email, name, message, phone, device, service });

    return NextResponse.json(new apiResponse(200, "email sent succesfully"));
  } catch (error) {
    console.error("Email Submission Error:", error);
    throw new apiError(error.statusCode || 500, "internal server error");
  }
};

export const POST = asyncHandler(handler);
