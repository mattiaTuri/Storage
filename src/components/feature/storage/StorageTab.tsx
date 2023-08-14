import Box from "@mui/material/Box";
import CustomModal from "./CustomModal";
import CustomButton from "../../shared/CustomButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/modal/modalSlice";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import Table from "./Table";
import { BooksProps } from "../../../models/Book";
import { ResourcesProps } from "../../../models/Resource";

interface StorageTabProps {
  values: BooksProps | ResourcesProps;
  onValChanges: (e: any) => void;
  addFunctionRow: () => void;
  idModalBtn: string;
  tableCols: GridColDef[];
  tableRows: BooksProps[] | ResourcesProps[];
}

function StorageTab({
  values,
  onValChanges,
  addFunctionRow,
  idModalBtn,
  tableCols,
  tableRows,
}: StorageTabProps) {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%" }} className="flex flex-col h-full">
      <Box className="flex justify-end my-4">
        <CustomButton
          id={idModalBtn}
          title="Add"
          functionClick={() => dispatch(openModal())}
        >
          <AddCircleOutlinedIcon
            color="secondary"
            className="group-hover:text-white ease-in-out z-10"
          />
        </CustomButton>
      </Box>
      <CustomModal
        input={values}
        onValChanges={onValChanges}
        addFunction={addFunctionRow}
      />
      <Table rows={tableRows} col={tableCols} />
    </Box>
  );
}

export default StorageTab;
