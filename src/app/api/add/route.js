import Video from "@/app/models/Video";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = JSON.parse(req.body);
  const { title, url, category } = data;
  try {
    const video = new Video({ title, url, category });
    console.log(video);
    await video.save();

    return NextResponse.json({ message: 'Video added successfully', status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}