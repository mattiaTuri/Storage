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

function Settings() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
            SETTINGS
          </Typography>
        </Box>
        {user.loading ? (
          <Box className="flex flex-col gap-10">
            <Typography component="span" className="text-center lg:text-left">
              Il tuo account
            </Typography>
            <Box
              id="imgSection"
              className="flex items-center flex-row justify-between lg:items-center lg:w-[50%] gap-4"
            >
              <UserAvatar acronym={user.currentUser.acronym}/>
              <Box className="flex flex-col lg:flex-row gap-4 lg:pr-10">
                <CustomButton
                  id="btnRemoveImg"
                  title="Rimuovi foto"
                  functionClick={() => console.log()}
                />
                <CustomButton
                  id="btnEditImg"
                  title="Cambia foto"
                  functionClick={() => console.log()}
                />
              </Box>
            </Box>
            <Divider />
            <Box className="lg:grid lg:grid-cols-2 gap-20">
              <Box id="userSection" className="flex flex-col gap-4 pb-10">
                <InputSettings
                  id="name"
                  labelText="Name"
                  inputValue={user.currentUser.name}
                />
                <InputSettings
                  id="surname"
                  labelText="Surname"
                  inputValue={user.currentUser.surname}
                />
                <Divider />
                <InputSettings
                  id="email"
                  labelText="Email"
                  inputValue={user.currentUser.email}
                />
                <Divider />
                <InputSettings
                  id="password"
                  labelText="Password"
                  inputValue={user.currentUser.password}
                />
              </Box>
              <Box className="flex flex-col gap-4 pt-10 lg:pt-0">
                <Box className="flex flex-col gap-4">
                  <label>
                    <Typography component="span">Lingua</Typography>
                  </label>
                  <Select
                    data-settings-select
                    labelId="demo-simple-select-label"
                    sx={{ backgroundColor: "text.secondary" }}
                    id="demo-simple-select"
                    value="IT"
                    onChange={handleChange}
                  >
                    <MenuItem value="IT">Italiano</MenuItem>
                    <MenuItem value="EN">Inglese</MenuItem>
                    <MenuItem value="SPA">Spagnolo</MenuItem>
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
