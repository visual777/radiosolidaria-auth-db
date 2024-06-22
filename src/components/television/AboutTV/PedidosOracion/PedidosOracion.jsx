import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./PedidosOracion.module.css";

const PedidosOracion = () => {
  return (
    <div className={css.container}>
      <h3>
       Pedidos De Oración
      </h3>
      <div className={css.content}>
        <div>
          <p>
            Como grupo de intercesores, nos comprometemos a mantener la
            confidencialidad de cada petición y a orar fervientemente por ellas.
            Nuestro objetivo es buscar <strong>la voluntad de Dios</strong> y
            <strong> confiar en Su</strong> poder y gracia para responder a
            nuestras oraciones de acuerdo con Su sabiduría perfecta.
          </p>
          <p>
            Por favor, envíen sus <strong>pedidos de oración</strong> a través
            del{" "}
            <Link
              href={"https://www.solidariatv.com/pedidos-de-oracion/"}
              aria-label="Ir a web sitio con formulario"
              className={css.link}
            >
              siguiente formulario.
            </Link>
          </p>
          <h4>
            <q>
              Porque donde están dos o tres reunidos en mi nombre, allí estoy yo
              en medio de ellos.
            </q>{" "}
            <span className={css.accent}>Mateo 18:20</span>
          </h4>
        </div>
        <Image
          src={"/images/solidariaTV/pedidos.webp"}
          alt="Pedidos de Oración"
          width={375}
          height={250}
          className={css.image}
        />
      </div>
    </div>
  );
};

export default PedidosOracion;
