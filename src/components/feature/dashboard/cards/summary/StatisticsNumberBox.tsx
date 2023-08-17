import Typography from "@mui/material/Typography";
import AnimatedNumber from "../../../../shared/AnimatedNumber";
import Loader from "../../../../shared/Loader";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";

import { ChangeMenu } from "../../../../core/sidebar/sidebarFunctions";
import { useDispatch } from "react-redux";
import { changeTab } from "../../../../../store/storageTab/storageTabSlice";

interface StatisticsNumberBoxProps {
  title: string;
  tab:string;
  link: string;
  data: number;
  loading: boolean;
  primaryColor: string;
  secondaryColor: string;
}

function StatisticsNumberBox({
  title,
  tab,
  link,
  data,
  loading,
  primaryColor,
  secondaryColor,
}: StatisticsNumberBoxProps) {

const dispatch = useDispatch()

const goToTab = (tab:string) => {
  dispatch(changeTab(tab))
  ChangeMenu("storage")
}

  return (
    <Link 
      to={link}
      className="flex justify-between items-center p-3 rounded-md w-full cursor-pointer"
      onClick={() => goToTab(tab)}
      style={{color:"white", backgroundColor: primaryColor}}
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
