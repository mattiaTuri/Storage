import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../controller/userApi";
import { ChangeTheme } from "./sliderThemeFunction";
import { userSelector } from "../../../store/user/selector";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

function SliderTheme({themeConf}: {themeConf:string}) {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const { t } = useTranslation();
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    ChangeTheme(user.currentUser.theme)  
  },[user.currentUser.theme])

  const saveTheme = (selected_theme:string) => {
    ChangeTheme(selected_theme)
    dispatch(updateUser({
        id:user.currentUser.id,
        name:user.currentUser.name,
        surname:user.currentUser.surname,
        email:user.currentUser.email,
        password:user.currentUser.password,
        theme:selected_theme,
        language:user.currentUser.language
    }));
    setComplete(true);
    setTimeout(() => {
      setComplete(false);
    }, 5000);
}

  return (
    <Box id="themeMenu" className="flex flex-col gap-4">
      <Box className="flex gap-4">
        <Typography component="span">{t("theme")}</Typography>
        {complete && <Icon icon="line-md:confirm-circle" color="#4daa57"  width="24" height="24"/>}
      </Box> 
      <Box className="flex gap-4">
        <Box className="flex items-center">
          {themeConf == "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </Box>
        <Box
          id="themeButton"
          sx={{ backgroundColor: "#262626" }}
          className="h-10 grid grid-cols-2 relative rounded-md"
        >
          <Button
            id="light"
            type="button"
            className="flex justify-center items-center z-10"
            onClick={() => saveTheme("light")}>
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
            id="dark"
            type="button"
            className="flex justify-center items-center z-10"
            onClick={() => saveTheme("dark")}>
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
            sx={{ backgroundColor: "primary.main" }}
            className="absolute top-0 h-10 w-[50%] rounded-md duration-300"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SliderTheme;
