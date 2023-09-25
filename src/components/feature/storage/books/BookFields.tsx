import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../../store/errors/selector";

interface BooksFieldProps {
  onValChanges: (e: any) => void;
  onValSelected: (e:any) => void;
  onValChecked: (e: any) => void;
}

function BooksField({ onValChanges, onValSelected, onValChecked }: BooksFieldProps) {
  const { t } = useTranslation();
  const errors = useSelector(errorsSelector)

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
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextInput id="title" label={t("title")} name="title" onChange={(e) => onValChanges(e)} autofocus={true} labelError={errors.titleError.label} errorVisibility={errors.titleError.errorVisibility}/>
        <TextInput id="author" label={t("author")} name="author" onChange={(e) => onValChanges(e)} autofocus={false} labelError={""} errorVisibility={false}/>
        <TextInput id="editor" label={t("editor")} name="editor" onChange={(e) => onValChanges(e)} autofocus={false} labelError={""} errorVisibility={false}/>
        <div className="w-full">
        {errors.genreError.errorVisibility && <Typography variant="caption" component="p" color="#ef233c" className="pb-2">{errors.genreError.label}</Typography>}
          <FormControl className="w-full">
            <InputLabel sx={{ color: "text.primary" }} id="genre-label">
              {t("genre")}
            </InputLabel>
            <Select
              labelId="genre-label"
              name="genre"
              label={t("genre")}
              onChange={onValSelected}
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
      </Box>
      <Box className="flex gap-10">
        <TextField
          id="pages"
          label={t("pages")}
          name="pages"
          variant="outlined"
          className="w-1/2"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChecked}
        ></TextField>
        <FormControlLabel
          control={
            <Checkbox id="isRead" name="isRead" onChange={(e) => onValChecked(e)} />
          }
          label={t("is_read")}
        />
      </Box>
    </Box>
  );
}

export default BooksField;
