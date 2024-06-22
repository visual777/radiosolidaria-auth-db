import Link from "next/link";
import css from "./HazteSocio.module.css";

const HazteSocio = () => {
  return (
    <div>
      <Link
        href={"https://www.solidariatv.com/hazte-socio/"}
        target="_blank"
        aria-label="Ir a sitio web de Solidaria TV Hazte Socio"
        className={css.link}

      >
        Hazte Socio
      </Link>
    </div>
  );
};

export default HazteSocio;
