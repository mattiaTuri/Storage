import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SliderTheme from "../../shared/Slider/SliderTheme";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../../shared/CustomButton";
import {
  Divider,
  Input,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputSettings from "../../feature/settings/InputSettings";
import UserAvatar from "../../shared/UserAvatar";

function Settings() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="xl" className="h-full">
      <Box className="flex flex-col h-full p-10">
        <Box className="text-center lg:text-left pb-10">
          <Typography
            sx={{ fontSize: 40 }}
            variant="h2"
            component="h1"
            color="#efa135"
          >
            SETTINGS
          </Typography>
        </Box>
        <Box className="flex flex-col gap-10">
          <Typography
            component="span"
            className="text-center lg:text-left text-[#474862] dark:text-white"
          >
            Il tuo account
          </Typography>
          <Box
            id="imgSection"
            className="flex items-center flex-row justify-between lg:items-center lg:w-[50%] gap-4"
          >
            <UserAvatar />
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
                id="nameSection"
                inputId="name"
                labelText="Name"
                inputValue="Mattia"
              />
              <InputSettings
                id="surnameSection"
                inputId="surname"
                labelText="Surname"
                inputValue="Turina"
              />
              <Divider />
              <InputSettings
                id="emailSection"
                inputId="email"
                labelText="Email"
                inputValue="turina.mattia@gmail.com"
              />
              <Divider />
              <InputSettings
                id="passwordSection"
                inputId="password"
                labelText="Password"
                inputValue="****"
              />
            </Box>
            <Box className="flex flex-col gap-4 pt-10 lg:pt-0">
              <Box className="flex flex-col gap-4">
                <label>
                  <Typography
                    component="span"
                    className="text-[#474862] dark:text-white"
                  >
                    Lingua
                  </Typography>
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="IT"
                  onChange={handleChange}
                >
                  <MenuItem value="IT">Italiano</MenuItem>
                  <MenuItem value="EN">Inglese</MenuItem>
                  <MenuItem value="SPA">Spagnolo</MenuItem>
                </Select>
              </Box>
              <SliderTheme />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Settings;
