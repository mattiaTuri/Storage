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

function Settings() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="xl" className="border h-full">
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
          <Typography component="span" className="text-center lg:text-left">
            Il tuo account
          </Typography>
          <Box
            id="imgSection"
            className="flex flex-col items-center sm:flex-row sm:justify-between lg:items-center lg:w-[50%] gap-4"
          >
            <Avatar
              sx={{ backgroundColor: "#0066ff", height: 120, width: 120 }}
            >
              <Typography
                component="span"
                className="text-white"
                sx={{ fontSize: 30 }}
              >
                TM
              </Typography>
            </Avatar>
            <Box className="flex flex-col lg:flex-row gap-4 lg:pr-10">
              <CustomButton
                title="Rimuovi foto"
                functionClick={() => console.log()}
              />
              <CustomButton
                title="Cambia foto"
                functionClick={() => console.log()}
              />
            </Box>
          </Box>
          <Divider />
          <Box className="lg:grid lg:grid-cols-2 gap-20">
            <Box id="userSection" className="flex flex-col gap-10 pb-10">
              <Box id="nameSection" className="flex gap-4 justify-between">
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value="Mattia"
                />
                <CustomButton
                  title="Modifica"
                  functionClick={() => console.log()}
                />
              </Box>
              <Box id="surnameSection" className="flex gap-4 justify-between">
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value="Turina"
                />
                <CustomButton
                  title="Modifica"
                  functionClick={() => console.log()}
                />
              </Box>
              <Divider />
              <Box id="emailSection" className="flex gap-4 justify-between">
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value="turina.mattia@gmail.com"
                />
                <CustomButton
                  title="Modifica"
                  functionClick={() => console.log()}
                />
              </Box>
              <Divider />
              <Box id="passwordSection" className="flex gap-4 justify-between">
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value="*****"
                />
                <CustomButton
                  title="Modifica"
                  functionClick={() => console.log()}
                />
              </Box>
            </Box>
            <Box className="flex flex-col gap-10 pt-10 lg:pt-0">
              <FormControl id="languageSection">
                <InputLabel id="demo-simple-select-label">Lingua</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="IT"
                  label="Lingua"
                  onChange={handleChange}
                >
                  <MenuItem value="IT">Italiano</MenuItem>
                  <MenuItem value="EN">Inglese</MenuItem>
                  <MenuItem value="SPA">Spagnolo</MenuItem>
                </Select>
              </FormControl>
              <Box id="themeSection">
                <SliderTheme />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Settings;
