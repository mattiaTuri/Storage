import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { InputProps } from "../../models/ComponentsModels";

function SelectInput({id, label, name, type, value, onChange, autofocus, labelError, errorVisibility} : InputProps){

    const { t } = useTranslation();

    const genresList = [
        {
          "key": "dystopian",
          "translation":t("genres.dystopian"),
        },
        {
          "key": "fantasy",
          "translation":t("genres.fantasy"),
        },
        {
          "key": "yellow",
          "translation":t("genres.yellow"),
        },
        {
          "key": "historian",
          "translation":t("genres.historian"),
        },
        {
          "key": "personal_grow",
          "translation":t("genres.personal_grow"),
        },
        {
          "key": "psychological",
          "translation":t("genres.psychological"),
        },
      ];

      return (
        <div className="w-full">
        {errorVisibility && <Typography variant="caption" component="p" color="#ef233c" className="pb-2">{label}</Typography>}
          <FormControl className="w-full">
            <InputLabel sx={{ color: "text.primary" }} id="genre-label">
              {`${t("genre")} *`}
            </InputLabel>
            <Select
              labelId="genre-label"
              name="genre"
              label={`${t("genre")} *`}
              onChange={onChange}
              sx={{
                backgroundColor: "text.secondary",
                borderRadius: "4px",
                "& .MuiSelect-icon": {
                  color: "text.primary",
                },
              }}
            >
              {genresList.map((genre: any) => {
                return (
                  <MenuItem key={genre.key} value={genre.key}>
                    {genre.translation}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      )
}

export default SelectInput