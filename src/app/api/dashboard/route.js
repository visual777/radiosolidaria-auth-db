import Video from "@/app/models/Video";
import { NextResponse } from "next/server";

export async function GET(req) {
  const category = req.nextUrl.searchParams.get("category");
  try {
    const videos = await Video.find({ category: category })
      .sort({ createdAt: -1 })
      .lean()
      .exec();
    return NextResponse.json({ data: videos, status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}
