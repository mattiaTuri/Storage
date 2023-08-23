import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CustomButton from "../../shared/CustomButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/user/selector";
import { Icon } from '@iconify/react';
import { updateUser } from "../../../controller/userApi";
import { t } from "i18next";

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
          data-settings-input
          disabled={disabledInput}
          sx={{ backgroundColor: "text.secondary", borderRadius: "4px" }}
          id={id}
          name={id}
          variant="outlined"
          defaultValue={inputValue}
          type={id != "password" ? "text" : "password"}
          onChange={(e) => editValue(e)}
        />
        <Box className="flex gap-4">
          {!buttonVisibility && (
            <CustomButton
              id="btnEditName"
              title={t("edit")}
              functionClick={() => showHideActionButtons()}
            />
          )}

          {buttonVisibility && (
            <CustomButton
              id="btnCancelName"
              title={t("cancel")}
              functionClick={() => showHideActionButtons()}
            />
          )}
          {buttonVisibility && (
            <CustomButton
              id="btnSaveName"
              title={t("save")}
              functionClick={() => saveData()}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InputSettings;

