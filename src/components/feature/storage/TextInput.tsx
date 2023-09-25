import TextField from "@mui/material/TextField"
import { TextInputProps } from "../../../models/ComponentsModels"

function TextInput({id, label, name, onChange, autofocus} : TextInputProps){
    return (
        <TextField
          id={id}
          label={label}
          name={name}
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onChange}
          autoFocus={autofocus}
        ></TextField>
    )
}

export default TextInput