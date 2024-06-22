import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["kids", "radio", "miguel", "ramon", "tv"],
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);

export default Video;
