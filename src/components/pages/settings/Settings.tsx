import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SliderTheme from "../../feature/settings/Slider/SliderTheme";
import CustomButton from "../../shared/CustomButton";
import { Divider } from "@mui/material";
import InputSettings from "../../feature/settings/InputSettings";
import UserAvatar from "../../shared/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/user/selector";
import Loader from "../../shared/Loader";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../../../i18n";
import { updateUser } from "../../../controller/userApi";
import SelectBox from "../../shared/SelectBox";

function Settings() {
  const { t } = useTranslation();
  const user = useSelector(userSelector);

  const dispatch = useDispatch();
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  const changeLanguage = (e: any) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    dispatch(
      updateUser({
        id: user.currentUser.id,
        name: user.currentUser.name,
        surname: user.currentUser.surname,
        email: user.currentUser.email,
        password: user.currentUser.password,
        theme: user.currentUser.theme,
        language: lang,
      })
    );
    setLoadComplete(true);
    setTimeout(() => {
      setLoadComplete(false);
    }, 5000);
  };

  const languagesList = [
    {
      "key": "it",
      "translation":t("italian"),
    },
    {
      "key": "en",
      "translation":t("english"),
    },
    {
      "key": "spa",
      "translation":t("spanish"),
    },
  ];

  return (
    <Container maxWidth="xl" className="h-full overflow-auto">
      <Box className="p-10 h-full">
        <Box className="relative flex flex-col h-full">
          <Box className="text-center lg:text-left pb-10">
            <Typography
              color="primary"
              sx={{ fontSize: 25 }}
              variant="h2"
              component="h1"
            >
              {t("settings").toUpperCase()}
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
                <UserAvatar acronym={user.currentUser.acronym} />
                <Box className="flex flex-col lg:flex-row gap-4 lg:pr-10">
                  <CustomButton
                    id="btnRemoveImg"
                    title={t("remove_photo")}
                    functionClick={() => console.log()}
                    disabled={true}
                  />
                  <CustomButton
                    id="btnEditImg"
                    title={t("edit_photo")}
                    functionClick={() => console.log()}
                    disabled={true}
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
                  <SelectBox id="language" label={`${t("language")}`} selectLabel="" fixedLabel={true} name="language" value={user.currentUser.language} onChange={changeLanguage} objList={languagesList} saveIconLoading={loadComplete} multiple={false}/>
                  <SliderTheme t={t} user={user.currentUser} />
                </Box>
              </Box>
            </Box>
          ) : (
            <Loader size={50} color="#0066ff" />
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Settings;
