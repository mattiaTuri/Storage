import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { SelectProps } from "../../models/ComponentsModels";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

function SelectBox({id, label, selectLabel, fixedLabel, name, value, onChange, labelError, errorVisibility, objList, saveIconLoading, multiple} : SelectProps){

  const {t} = useTranslation()

      return (
        <Box className="w-full">
          <FormControl className="w-full">
            {fixedLabel ? 
              <Box className="flex gap-4 mb-4">
                <label>
                  <Typography component="span">{label}</Typography>
                </label>
                {saveIconLoading && (
                  <Icon
                    icon="line-md:confirm-circle"
                    color="#4daa57"
                    width="24"
                    height="24"
                  />
                )}
              </Box>
              :
              <>
                {errorVisibility && <Typography variant="caption" component="p" color="#ef233c" className="pb-2">{labelError}</Typography>}
                <InputLabel sx={{ color: "text.primary" }} id={`${id}-label`}>
                  {label}
                </InputLabel>
              </>             
            }             
            <Select
              id={id}
              labelId={`${id}-label`}
              label={selectLabel}
              value={value}
              name={name}
              onChange={onChange}
              multiple={multiple}
              sx={{
                backgroundColor: "text.secondary",
                borderRadius: "4px",
                "& .MuiSelect-icon": {
                  color: "text.primary",
                },
              }}
            >
              {objList.map((elem: any) => {
                return (
                  <MenuItem key={elem.key} value={elem.key}>
                    {t(elem.translation)}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>         
        </Box>
      )
}

export default SelectBox