import Video from "@/app/models/Video";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { id } = req.body;
  try {
    const video = await Video.findByIdAndDelete(id);

    if (!video) {
      return NextResponse.json({ message: 'No video found with this id', status: 404 });
    }

    return NextResponse.json({ message: 'Video deleted successfully', status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}