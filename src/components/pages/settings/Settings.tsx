import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SliderTheme from "../../shared/Slider/SliderTheme";
import CustomButton from "../../shared/CustomButton";
import {
  Divider,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputSettings from "../../feature/settings/InputSettings";
import UserAvatar from "../../shared/UserAvatar";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/user/selector";
import Loader from "../../shared/Loader";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

function Settings() {
  const [language, setLanguage] = useState("");
  const { t } = useTranslation();

  const changeLanguage = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const user = useSelector(userSelector);

  return (
    <Container maxWidth="xl" className="h-full overflow-auto">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            color="primary"
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
          >
            {t("settings")}
          </Typography>
        </Box>
        {user.loading ? (
          <Box className="flex flex-col gap-10">
            <Typography component="span" className="text-center lg:text-left">
            {t("your_account")}
            </Typography>
            <Box
              id="imgSection"
              className="flex items-center flex-row justify-between lg:items-center lg:w-[50%] gap-4"
            >
              <UserAvatar acronym={user.currentUser.acronym}/>
              <Box className="flex flex-col lg:flex-row gap-4 lg:pr-10">
                <CustomButton
                  id="btnRemoveImg"
                  title={t("remove_photo")}
                  functionClick={() => console.log()}
                />
                <CustomButton
                  id="btnEditImg"
                  title={t("edit_photo")}
                  functionClick={() => console.log()}
                />
              </Box>
            </Box>
            <Divider />
            <Box className="lg:grid lg:grid-cols-2 gap-20">
              <Box id="userSection" className="flex flex-col gap-4 pb-10">
                <InputSettings
                  id="name"
                  labelText={t("name")}
                  inputValue={user.currentUser.name}
                />
                <InputSettings
                  id="surname"
                  labelText={t("surname")}
                  inputValue={user.currentUser.surname}
                />
                <Divider />
                <InputSettings
                  id="email"
                  labelText={t("email")}
                  inputValue={user.currentUser.email}
                />
                <Divider />
                <InputSettings
                  id="password"
                  labelText={t("password")}
                  inputValue={user.currentUser.password}
                />
              </Box>
              <Box className="flex flex-col gap-4 pt-10 lg:pt-0">
                <Box className="flex flex-col gap-4">
                  <label>
                    <Typography component="span">{t("language")}</Typography>
                  </label>
                  <Select
                    data-settings-select
                    labelId="demo-simple-select-label"
                    sx={{ backgroundColor: "text.secondary" }}
                    id="demo-simple-select"
                    value={language}
                    onChange={changeLanguage}
                  >
                    <MenuItem value="it">{t("italian")}</MenuItem>
                    <MenuItem value="en">{t("english")}</MenuItem>
                    <MenuItem value="spa">{t("spanish")}</MenuItem>
                  </Select>
                </Box>
                <SliderTheme themeConf={user.currentUser.theme}/>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="flex justify-center items-center h-full">
            <Loader size={50} color="#0066ff" />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Settings;
