import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector } from "../../../store/modal/selector";
import { closeModal } from "../../../store/modal/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { BooksProps } from "../../../models/Books";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #efa135",
  borderRadius: "0.5rem",
  p: 2,
};

interface ModalProps {
  onValChanges: (event: any) => void;
  addNewBook: (event: any) => void;
}

function CustomModal({ onValChanges, addNewBook }: ModalProps) {
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
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <Typography id="modal-title" variant="h6" component="span">
              Add new book
            </Typography>
            <IconButton onClick={() => dispatch(closeModal())}>
              <CloseIcon />
            </IconButton>
          </div>
          <Box
            id="modal-modal-description"
            className="flex flex-col gap-10 mt-10"
            component="form"
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className="w-full"
              name="title"
              onChange={onValChanges}
            />
            <TextField
              label="Author"
              variant="outlined"
              className="w-full"
              name="author"
              onChange={onValChanges}
            />
            <TextField
              id="outlined-basic"
              label="Editor"
              variant="outlined"
              className="w-full"
              name="editor"
              onChange={onValChanges}
            />
            <div className="flex gap-4">
              <TextField
                id="outlined-basic"
                label="Genre"
                variant="outlined"
                className="w-[70%]"
                name="genre"
                onChange={onValChanges}
              />
              <TextField
                id="outlined-basic"
                label="Pages"
                variant="outlined"
                className="w-[30%]"
                name="pages"
                onChange={onValChanges}
              />
            </div>
          </Box>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="outlined" onClick={() => dispatch(closeModal())}>
              Cancel
            </Button>
            <Button variant="outlined" onClick={addNewBook}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
