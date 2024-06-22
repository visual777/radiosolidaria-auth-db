import React from 'react'
import css from './AddNew.module.css'

const AddNew = () => {
  return (
    <div className={css.btnContainer}>
        <button type='button' className={css.addBtn}>Añadir video nuevo</button>
    </div>
  )
}

export default AddNew