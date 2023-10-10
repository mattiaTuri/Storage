import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../../shared/CustomButton";
import { t } from "i18next";
import { ModalProps } from "../../../models/ComponentsModels";
import { setGenreError, setLinkError, setTagError, setTitleError } from "../../../store/errors/errorsSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "0.5rem",
  p: 2,
  backgroundColor: "background.paper",
};

function CustomModal({ title, btnId, btnFunction, btnTitle, children, open, setModal}: ModalProps) {
  const dispatch = useDispatch();

  const cancelModal = () => {
    dispatch(setTitleError({titleLabel:"", titleErrorVisibility:false}))
    dispatch(setGenreError({genreLabel:"", genreErrorVisibility:false}))
    dispatch(setLinkError({linkError:"", linkErrorVisibility:false}))
    dispatch(setTagError({tagError:"", tagErrorVisibility:false}))
    setModal(false)
  }

  return (
    <Modal open={open}>
      <Box sx={style} className="border-[#434343] border">
        <div className="flex justify-between items-center">
          <Typography id="modal-title" variant="h6" component="span">
            {title}
          </Typography>
          <CustomButton id="closeModalButton" functionClick={() => cancelModal()}>
          <CloseIcon
              color="secondary"
              className="z-10 ease-in-out group-hover:text-white"
            />
          </CustomButton>
        </div>
        {children}
        <div className="mt-10 flex justify-end gap-4">
          <CustomButton
            id="btnCloseModal"
            title={t("cancel")}
            functionClick={() => cancelModal()}
          />
          <CustomButton
            id={btnId}
            title={btnTitle}
            functionClick={btnFunction}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default CustomModal;
