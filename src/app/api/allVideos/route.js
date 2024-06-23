import Video from "@/app/models/Video";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const videos = await Video.find().sort({ createdAt: -1 }).lean().exec();
    const response = NextResponse.json({ data: videos, status: 200 });
    response.headers.set('Cache-Control', 's-maxage=0, stale-while-revalidate');
    return response;
  } catch (error) {
    console.log(error);
    const errorResponse = NextResponse.json({ message: "An error occurred", status: 500 });
    errorResponse.headers.set('Cache-Control', 's-maxage=0, stale-while-revalidate');
    return errorResponse;
  }
}