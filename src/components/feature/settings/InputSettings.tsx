import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CustomButton from "../../shared/CustomButton";
import { useEffect, useState } from "react";
import AnimatedCheck from "../../shared/AnimatedCheck";
import { ref, update } from "firebase/database";
import { database } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/user/selector";
import { updateUser } from "../../../store/user/userSlice";
import { Icon } from '@iconify/react';

interface InputSettingsProps {
  id: string;
  labelText: string;
  inputValue: string;
}

function InputSettings({ id, labelText, inputValue }: InputSettingsProps) {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const [complete, setComplete] = useState<boolean>(false);
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const [currentValues, setCurrentValues] = useState<any>(user.currentUser)

  const showHideActionButtons = () => {
    buttonVisibility ? setButtonVisibility(false) : setButtonVisibility(true);
    enableDisbaledInputEdit();
  };

  const enableDisbaledInputEdit = () => {
    disabledInput ? setDisabledInput(false) : setDisabledInput(true);
  };

  useEffect(() => {
    setCurrentValues(user.currentUser)
  },[user.currentUser])

  const saveData = () => {
    setComplete(true);
    const { name, surname, email, password } = currentValues;
    update(ref(database, "users/0/"), {
      acronym: name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase(),
      name: name,
      surname: surname,
      email: email,
      password:password
    });
    dispatch(updateUser(currentValues))
    setTimeout(() => {
      setComplete(false);
    }, 5000);
    showHideActionButtons();
  };

  const editValue = (event: any) => {
    setCurrentValues({
      ...currentValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box id={id} className="flex flex-col gap-4">
      <label className="flex items-center gap-4">
        <Typography component="span">{labelText}</Typography>
        {complete && <Icon icon="line-md:confirm-circle" color="#4daa57"  width="24" height="24"/>}
      </label>
      <Box className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <TextField
          disabled={disabledInput}
          sx={{ backgroundColor: "text.secondary", borderRadius: "4px" }}
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

