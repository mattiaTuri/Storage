import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import { removeBook } from "../../../../controller/booksApi";
import { booksSelector } from "../../../../store/books/selector";
import IconButton from "@mui/material/IconButton";

function ActionDeleteBook({ id }: { id: GridRowId }) {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);

  return (
    <IconButton
      sx={{ width: "50px", height: "50px" }}
      onClick={() => dispatch(removeBook({ id, books }))}
    >
      <DeleteIcon color="inherit" className="dark:text-white" />
    </IconButton>
  );
}

export default ActionDeleteBook;
