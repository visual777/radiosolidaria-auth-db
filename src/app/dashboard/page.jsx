import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import DashboardMain from "@/components/dashboard/DashboardMain";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria Media - tablero de control",
  description: "Tablero de control de Solidaria Media y video de YouTube",
};

const dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/?callbackUrl=/dashboard");
  }

  return (
    <section className={css.section}>
      <DashboardMain />
    </section>
  );
};

export default dashboard;
