import Video from "@/app/models/Video";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function DELETE(req) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({
      message: "Not authenticated",
      status: 401,
    });
  }

    const id = req.nextUrl.searchParams.get("id");
    try {
      const video = await Video.findByIdAndDelete(id).lean().exec();
      if (!video) {
        return NextResponse.json({ message: "Video not found", status: 404 });
      }
      return NextResponse.json({
        message: "Video deleted successfully",
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "An error occurred", status: 500 });
    }
}
