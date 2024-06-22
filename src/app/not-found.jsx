import React from 'react'
import Link from 'next/link';
import css from './not-found.module.css';

const notFound = () => {
  return (
    <section className={css.section}>
      <div className={css.container}> 
       <h1>404</h1>
       <h2>Not Found Page</h2>
       <Link href={'/'} aria-label='Ir a Início página' className={css.link}>Ir a Início Page</Link>
      </div>
    </section>
  )
}

export default notFound;
