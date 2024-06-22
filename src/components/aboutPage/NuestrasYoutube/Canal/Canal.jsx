import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./Canal.module.css";

const Canal = ({ ch }) => {
  return (
    <li className={css.card}>
      <Link
        href={ch.url}
        target="_blank"
        aria-label={`Ir a canal de YouTube ${ch.title}`}
        className={css.cardinfo}
      >
        <Icon name={ch.icon} className={css.icon} />
        <div className={css.description}>
          <h2 className={css.title}>{ch.text}</h2>
          <p>{ch.info}</p>
        </div>
      </Link>
    </li>
  );
};

export default Canal;
