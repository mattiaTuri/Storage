import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface SpinnerProps {
  size: number;
  color: string;
}

function Loader({ size, color }: SpinnerProps) {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <CircularProgress size={size} sx={{ color: color }} />
    </div>
  );
}

export default Loader;
