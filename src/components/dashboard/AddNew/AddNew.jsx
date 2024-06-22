import React from 'react'
import css from './AddNew.module.css'

const AddNew = ({setShowModal}) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className={css.btnContainer}>
        <button type='button' className={css.addBtn} onClick={handleClick}>Añadir video nuevo</button>
    </div>
  )
}

export default AddNew