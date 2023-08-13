import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector } from "../../../store/modal/selector";
import { closeModal } from "../../../store/modal/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { BooksProps } from "../../../models/Book";
import { ResourcesProps } from "../../../models/Resource";
import CustomButton from "../../shared/CustomButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "0.5rem",
  p: 2,
};

interface ModalProps {
  input: BooksProps | ResourcesProps;
  onValChanges: (event: any) => void;
  addFunction: () => void;
}

function CustomModal({ input, onValChanges, addFunction }: ModalProps) {
  const customModal: boolean = useSelector(modalSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={customModal}
        onClose={() => dispatch(closeModal)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={style}
          className="bg-white dark:bg-[#262626] border-[#434343] border"
        >
          <div className="flex justify-between items-center">
            <Typography
              id="modal-title"
              variant="h6"
              component="span"
              className="text-[#474862] dark:text-white"
            >
              Add new book
            </Typography>
            <IconButton
              onClick={() => dispatch(closeModal())}
              sx={{ borderRadius: 9999, overflow: "hidden" }}
              className="close-button group relative w-10 h-10 after:content-[''] after:absolute after:bg-[#efa135] after:dark:bg-[#522AA7] after:w-60 after:h-60 after:top-[100%] hover:after:top-[-100%] after:duration-500 after:rounded-full"
            >
              <CloseIcon className="text-[#474862] dark:text-white group-hover:text-white z-10 ease-in-out" />
            </IconButton>
          </div>
          <Box
            id="modal-modal-description"
            className="flex flex-col gap-10 mt-10"
            component="form"
          >
            {Object.keys(input).map((key: string) => {
              if (key != "id")
                return (
                  <TextField
                    autoFocus={key == "title" ? true : false}
                    key={key}
                    id="outlined-basic"
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    variant="outlined"
                    className="w-full"
                    name={key}
                    onChange={onValChanges}
                  />
                );
            })}
          </Box>
          <div className="mt-10 flex justify-end gap-4">
            <CustomButton
              id="btnCloseModal"
              title="Cancel"
              functionClick={() => dispatch(closeModal())}
            />
            <CustomButton
              id="btnSaveInputModal"
              title="Save"
              functionClick={addFunction}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
