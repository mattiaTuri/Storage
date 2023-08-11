import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CustomButton from "../../shared/CustomButton";
import { useState } from "react";
import AnimatedCheck from "../../shared/AnimatedCheck";
import { ref, update } from "firebase/database";
import { database } from "../../../firebase";

interface InputSettingsProps {
  id: string;
  labelText: string;
  inputValue: string;
}

function InputSettings({
  id,
  labelText,
  inputValue,
}: InputSettingsProps) {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const [complete, setComplete] = useState<boolean>(false);
  const [currentValues, setCurrentValues] = useState<any>({
    id:0,
    name:"Mattia", 
    surname:"Turina",
    email:"turina.mattia@gmail.com"
  });

  const showHideActionButtons = () => {
    buttonVisibility ? setButtonVisibility(false) : setButtonVisibility(true);
    enableDisbaledInputEdit();
  };

  const enableDisbaledInputEdit = () => {
    disabledInput ? setDisabledInput(false) : setDisabledInput(true);
  };

  const saveData = () => {
    setComplete(true) 
    const {name, surname, email } = currentValues
    update(ref(database, "users/0/"), {
      name:name,
      surname:surname,
      email:email
    });
    setTimeout(() => {
      setComplete(false)
    },5000)
    showHideActionButtons()
  }

  const editValue = (event:any) => {
    setCurrentValues({...currentValues, [event.target.name]: event.target.value}) 
  }

  return (
    <Box id={id} className="flex flex-col gap-4">
      <label className="flex items-center gap-4">
        <Typography component="span" className="text-[#474862] dark:text-white">
          {labelText}
        </Typography>
        {complete && <AnimatedCheck/>}    
      </label>
      <Box className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <TextField
          disabled={disabledInput}
          id={id}
          name={id}
          variant="outlined"
          defaultValue={inputValue}
          onChange={(e) => editValue(e)}
        />
        <Box className="flex gap-4">
          {!buttonVisibility && (
            <CustomButton
              id="btnEditName"
              title="Modifica"
              functionClick={() => showHideActionButtons()}
            />
          )}

          {buttonVisibility && (
            <CustomButton
              id="btnCancelName"
              title="Annulla"
              functionClick={() => showHideActionButtons()}
            />
          )}
          {buttonVisibility && (
            <CustomButton
              id="btnSaveName"
              title="Salva"
              functionClick={() => saveData()}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InputSettings;
