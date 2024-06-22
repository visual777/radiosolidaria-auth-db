import Icon from '@/components/Icon/Icon';
import css from './Modal.module.css';

const Modal = ({children, setShowModal}) => {
  return (
    <div className={css.backdrop}>
        <div className={css.containerForm}>
            {children}
            <button type='button' className={css.closeBtn} onClick={() => setShowModal(false)}>
                <Icon name='icon-cancel' className={css.iconClose}/>
            </button>
        </div>
    </div>
  )
}

export default Modal