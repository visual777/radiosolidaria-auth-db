import Image from "next/image";
import css from "./DesktopImg.module.css";

const DesktopImg = () => {
  return (
    <div className={css.imageBox}>
      <Image
        src="/images/radio/radio-desktop.webp"
        alt="Radio cristiana con micrófono"
        width={200}
        height={100}
      />
    </div>
  );
};

export default DesktopImg;
