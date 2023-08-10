import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CustomButton from "../../shared/CustomButton";
import { useState } from "react";

interface InputSettingsProps {
  id: string;
  inputId: string;
  labelText: string;
  inputValue: string;
}

function InputSettings({
  id,
  inputId,
  labelText,
  inputValue,
}: InputSettingsProps) {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);

  const showHideActionButtons = () => {
    buttonVisibility ? setButtonVisibility(false) : setButtonVisibility(true);
    enableDisbaledInputEdit();
  };

  const enableDisbaledInputEdit = () => {
    disabledInput ? setDisabledInput(false) : setDisabledInput(true);
  };

  return (
    <Box id={id} className="flex flex-col gap-4">
      <label>
        <Typography component="span" className="text-[#474862] dark:text-white">
          {labelText}
        </Typography>
      </label>
      <Box className="flex justify-between gap-4">
        <TextField
          disabled={disabledInput}
          id={inputId}
          variant="outlined"
          value={inputValue}
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
              functionClick={() => console.log()}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InputSettings;
