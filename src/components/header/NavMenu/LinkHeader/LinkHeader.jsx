import Link from "next/link";
import css from "./LinkHeader.module.css";

const LinkHeader = ({ link }) => {
  return (
    <Link href={link?.path} className={css.link}>
      {link.name}
    </Link>
  );
};

export default LinkHeader;
