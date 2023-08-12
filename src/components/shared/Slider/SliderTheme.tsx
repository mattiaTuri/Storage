import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { themeSelector } from "../../../store/theme/selector";
import { lightMode, darkMode } from "../../../store/theme/themeSlice";
import { ChangeTheme } from "./sliderThemeFunction";

function SliderTheme() {
  const theme: string = useSelector(themeSelector);
  const dispatch = useDispatch();
  return (
    <Box id="themeMenu" className="flex flex-col gap-4">
      <Typography component="span" className="text-[#474862] dark:text-white">
        Tema
      </Typography>
      <Box className="flex gap-4">
        <Box className="flex items-center">
          {theme == "light" ? (
            <LightModeIcon className="text-[#474862] dark:text-white" />
          ) : (
            <DarkModeIcon className="text-[#474862] dark:text-white" />
          )}
        </Box>
        <Box
          id="themeButton"
          className="bg-[#474862] bg-[#434343] h-10 grid grid-cols-2 relative rounded-md"
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
            className="absolute top-0 h-10 w-[50%] bg-[#efa135] rounded-md duration-300"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SliderTheme;
