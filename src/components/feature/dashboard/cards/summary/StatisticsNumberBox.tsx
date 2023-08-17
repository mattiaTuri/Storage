import Typography from "@mui/material/Typography";
import AnimatedNumber from "../../../../shared/AnimatedNumber";
import Loader from "../../../../shared/Loader";
import Box from "@mui/material/Box";
import { ChangeMenu } from "../../../../core/sidebar/sidebarFunctions";
import { Link } from "react-router-dom";

interface StatisticsNumberBoxProps {
  title: string;
  link: string;
  data: number;
  loading: boolean;
  primaryColor: string;
  secondaryColor: string;
}

function StatisticsNumberBox({
  title,
  link,
  data,
  loading,
  primaryColor,
  secondaryColor,
}: StatisticsNumberBoxProps) {
  return (
    <Link
      to={link}
      className="flex justify-between items-center p-3 rounded-md w-full text-white"
      onClick={() => ChangeMenu("storage")}
      style={{ backgroundColor: primaryColor }}
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
    </Link>
  );
}

export default StatisticsNumberBox;
