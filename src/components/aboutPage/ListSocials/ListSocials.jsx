'use client';

import { socials } from "@/app/lib/socials";
import Socials from "../socials/Socials";
import css from "./ListSocials.module.css";

const ListSocials = () => {
  return (
    <ul className={css.list}>
      {socials.map(social => <Socials key={social.id} social={social} />)}
    </ul>
  )
}

export default ListSocials
