import Video from "@/app/models/Video";
import { NextResponse } from "next/server";

// export async function GET(req) {
//     try {
//       const videos = await Video.find({}).lean().exec();
//       return NextResponse.json({ data: videos, status: 200 });
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json({ message: "An error occurred", status: 500 });
//     }
//   }

  export async function GET(req) {
    try {
      const videos = await Video.find({ category: 'radio' })
        .sort({ createdAt: -1 })
        .limit(5)
        .lean()
        .exec();
      return NextResponse.json({ data: videos, status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "An error occurred", status: 500 });
    }
  }
