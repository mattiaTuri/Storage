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
import { ResourcesProps } from "../../../models/Resources";
import { useEffect, useRef } from "react";

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
  input: BooksProps | ResourcesProps
  onValChanges: (event: any) => void;
  addNewBook: (event: any) => void;
}

function CustomModal({input, onValChanges, addNewBook }: ModalProps) {
  const customModal: boolean = useSelector(modalSelector);
  const dispatch = useDispatch();

  const firstChildRef = useRef<HTMLInputElement>(null)

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
            {Object.keys(input).map((key:string) => {
              if(key != "id")
              return (
                <TextField 
                autoFocus={key == "title" ? true : false}          
                key={key}
                id="outlined-basic"
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                variant="outlined"
                className="w-full"
                name={key}
                ref={firstChildRef}
                onChange={onValChanges}/>
              )
            })}
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
