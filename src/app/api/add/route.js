import Video from "@/app/models/Video";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
export async function POST(req) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({
      message: "Not authenticated",
      status: 401,
    });
  }

  try {
    const data = await req.json();
    const video = new Video(data);
    await video.save();

    return NextResponse.json({
      message: "Video added successfully",
      data: video,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "An error occurred while adding the video",
      status: 500,
    });
  }
}
