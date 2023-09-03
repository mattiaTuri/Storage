import CircularProgress from "@mui/material/CircularProgress";
import { LoaderProps } from "../../models/ComponentsModels";

function Loader({ size, color }: LoaderProps) {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <CircularProgress size={size} sx={{ color: color }} />
    </div>
  );
}

export default Loader;
