import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

import './modal.scss';
import RegisterUser from '@components/modal/register-user/RegisterUser';
import { modalSelector } from '@/redux/modal/selectors';
import { closeModal } from '@/redux/modal/actions';

const MODAL_COMPONENTS = {
  registerUser: RegisterUser,
};

function TransitionsModal() {
  const { modalType, params: { title, ...restParams } } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const modalComponent = useMemo(() => {
    const ModalContent = MODAL_COMPONENTS[modalType];
    return ModalContent ? (
      <ModalContent
        className="modal__body"
        params={restParams}
      />
    ) : null;
  }, [modalType, restParams]);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        className="modal"
        open={!!modalType}
        disableBackdropClick
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!!modalType}>
          <>
            <div className="modal__content">
              {!!modalComponent && (
              <div className="modal__header">
                <h2 id="transition-modal-title">{title}</h2>
                <span className="modal__close">
                  <CloseIcon onClick={handleCloseModal} />
                </span>
              </div>
              )}
              {modalComponent}
            </div>
          </>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
