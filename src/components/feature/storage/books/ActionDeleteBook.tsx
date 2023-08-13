import { GridActionsCellItem } from "@mui/x-data-grid/components/cell/GridActionsCellItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GridRowId } from "@mui/x-data-grid/models/gridRows";
import { removeBook } from "../../../../controller/booksApi";
import { booksSelector } from "../../../../store/books/selector";

function ActionDeleteBook({ id }: { id: GridRowId }) {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);

  return (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      onClick={() => dispatch(removeBook({ id, books }))}
      color="inherit"
      className="dark:text-white"
    />
  );
}

export default ActionDeleteBook;
