import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ChangeTheme } from "../core/sidebar/sidebarFunctions";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, lightMode } from "../../store/theme/themeSlice";
import { themeSelector } from "../../store/theme/selector";

function SliderTheme() {
  const theme: string = useSelector(themeSelector);
  const dispatch = useDispatch();
  return (
    <Box id="themeMenu" className="flex items-center gap-2">
      <Box>
        {theme == "light" ? (
          <LightModeIcon className="text-[#474862] dark:text-white" />
        ) : (
          <DarkModeIcon className="text-[#474862] dark:text-white" />
        )}
      </Box>
      <Box
        id="themeButton"
        className="bg-[#cfcde7] h-10 grid grid-cols-2 relative rounded-md"
      >
        <Button
          id="lightMode"
          type="button"
          className="flex justify-center items-center z-10"
          onClick={() => {
            ChangeTheme("lightMode");
            dispatch(lightMode());
          }}
        >
          <Typography
            variant="body1"
            component="span"
            color="white"
            className="normal-case"
          >
            Light
          </Typography>
        </Button>
        <Button
          id="darkMode"
          type="button"
          className="flex justify-center items-center z-10"
          onClick={() => {
            ChangeTheme("darkMode");
            dispatch(darkMode());
          }}
        >
          <Typography
            variant="body1"
            component="span"
            color="white"
            className="normal-case"
          >
            Dark
          </Typography>
        </Button>
        <Box
          id="sliderTheme"
          className="absolute top-0 h-10 w-[50%] bg-[#0066ff] rounded-md duration-300"
        ></Box>
      </Box>
    </Box>
  );
}

export default SliderTheme;
