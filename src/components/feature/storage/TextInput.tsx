import TextField from "@mui/material/TextField"
import { TextInputProps } from "../../../models/ComponentsModels"
import Typography from "@mui/material/Typography"

function TextInput({id, label, name, type, value, onChange, autofocus, labelError, errorVisibility} : TextInputProps){
    return (
      <div>
        {errorVisibility && <Typography id={`${id}-label`} variant="caption" component="p" color="#ef233c" className="pb-2">{labelError}</Typography>}
        <TextField
            id={id}
            label={label}
            name={name}
            variant="outlined"
            className="w-full"
            type={type}
            value={value}
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
      </div>
    )
}

export default TextInput