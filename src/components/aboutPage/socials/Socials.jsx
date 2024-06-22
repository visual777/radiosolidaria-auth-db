import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./Socials.module.css";

const Socials = ({ social }) => {
  return (
    <li className={css.card}>
      <Link className={css.cardinfo} href={social.url} target="_blank">
        <Icon name={social.icon} className={css.icon} />
        <div className={css.description}>
          <h2 className={css.title}>{social.text}</h2>
          <p>{social.info}</p>
        </div>
      </Link>
    </li>
  );
};

export default Socials;
