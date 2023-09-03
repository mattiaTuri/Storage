import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../controller/userApi";
import i18n from "../../../i18n";
import { Icon } from "@iconify/react";
import { LanguageSelectProps } from "../../../models/ComponentsModels";

function LanguageSelect({ t, user }: LanguageSelectProps) {
  const dispatch = useDispatch();
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  const changeLanguage = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    dispatch(
      updateUser({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        theme: user.theme,
        language: lang,
      })
    );
    setLoadComplete(true);
    setTimeout(() => {
      setLoadComplete(false);
    }, 5000);
  };

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex gap-4">
        <label>
          <Typography component="span">{t("language")}</Typography>
        </label>
        {loadComplete && (
          <Icon
            icon="line-md:confirm-circle"
            color="#4daa57"
            width="24"
            height="24"
          />
        )}
      </Box>
      <Select
        data-settings-select
        labelId="demo-simple-select-label"
        sx={{ backgroundColor: "text.secondary" }}
        id="demo-simple-select"
        value={user.language}
        onChange={changeLanguage}
      >
        <MenuItem value="it">{t("italian")}</MenuItem>
        <MenuItem value="en">{t("english")}</MenuItem>
        <MenuItem value="spa">{t("spanish")}</MenuItem>
      </Select>
    </Box>
  );
}

export default LanguageSelect;
