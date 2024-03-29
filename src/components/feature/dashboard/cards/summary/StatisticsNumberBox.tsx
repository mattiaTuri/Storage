import Typography from "@mui/material/Typography";
import AnimatedNumber from "../../../../shared/AnimatedNumber";
import Loader from "../../../../shared/Loader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { ChangeMenu } from "../../../../core/sidebar/sidebarFunctions";
import { useDispatch } from "react-redux";
import { changeTab } from "../../../../../store/storageTab/storageTabSlice";
import { StatisticsNumberBoxProps } from "../../../../../models/ComponentsModels";

function StatisticsNumberBox({
  title,
  tab,
  link,
  data,
  loading,
  primaryColor,
  secondaryColor,
}: StatisticsNumberBoxProps) {
  const dispatch = useDispatch();

  const goToTab = (tab: string) => {
    dispatch(changeTab(tab));
    ChangeMenu("storage");
  };

  return (
    <Link
      to={link}
      className="flex justify-between items-center p-3 rounded-md w-full cursor-pointer"
      onClick={() => goToTab(tab)}
      style={{ color: "white", backgroundColor: primaryColor }}
    >
      <Typography component="p">{title}</Typography>
      <Box
        className="relative max-w-max flex justify-center h-full px-4 rounded-md"
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
