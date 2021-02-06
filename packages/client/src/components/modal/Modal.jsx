import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { colors } from '@/theme/colors';

import RegisterUser from '@components/modal/register-user/RegisterUser';
import { modalSelector } from '@/redux/modal/selectors';
import { closeModal } from '@/redux/modal/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    outline: 'none',
  },
  header: {
    position: 'relative',
    width: '100%',
    backgroundColor: colors.mountainMeadow[600],
    padding: '1rem',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    color: colors.blueGrey[50],
    '& h2': {
      margin: '0',
    },
  },
  close: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
  },
  body: {
    padding: '1rem',
    backgroundColor: colors.blueGrey[50],
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    maxHeight: '450px',
    overflowY: 'auto',
  },
});

const MODAL_COMPONENTS = {
  registerUser: RegisterUser,
};

function TransitionsModal() {
  const { modalType, params: { title, ...restParams } } = useSelector(modalSelector);

  const classes = useStyles();

  const dispatch = useDispatch();

  const modalComponent = useMemo(() => {
    const ModalContent = MODAL_COMPONENTS[modalType];
    return ModalContent ? (
      <ModalContent
        className={classes.body}
        params={restParams}
      />
    ) : null;
  }, [classes.body, modalType, restParams]);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <>
      <Modal
        className={classes.root}
        open={!!modalType}
        disableBackdropClick
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!!modalType}>
          <div className={classes.content}>
            {!!modalComponent && (
            <div className={classes.header}>
              <h2>{title}</h2>
              <span className={classes.close}>
                <CloseIcon onClick={handleCloseModal} />
              </span>
            </div>
            )}
            {modalComponent}
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default TransitionsModal;
