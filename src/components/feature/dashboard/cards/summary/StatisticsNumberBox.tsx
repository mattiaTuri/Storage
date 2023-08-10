import Typography from "@mui/material/Typography";
import AnimatedNumber from "../../../../shared/AnimatedNumber";
import Loader from "../../../../shared/Loader";
import Box from "@mui/material/Box";

interface StatisticsNumberBoxProps {
  title: string;
  data: number;
  loading: boolean;
  primaryColor: string;
  secondaryColor: string;
}

function StatisticsNumberBox({
  title,
  data,
  loading,
  primaryColor,
  secondaryColor,
}: StatisticsNumberBoxProps) {
  return (
    <Box
      className="flex justify-between items-center p-3 rounded-md w-full"
      sx={{ backgroundColor: primaryColor }}
    >
      <Typography component="p">{title}</Typography>
      <Box
        className="max-w-max px-4 text-center rounded-md"
        sx={{ backgroundColor: secondaryColor }}
      >
        {loading ? (
          <AnimatedNumber listLength={data} />
        ) : (
          <Loader size={10} color={primaryColor} />
        )}
      </Box>
    </Box>
  );
}

export default StatisticsNumberBox;
