import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { BooksProps } from "../../../../models/Book";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

interface BooksFieldProps {
  bookValues: BooksProps;
  setBookValues: (e: any) => void;
}

function BooksField({ bookValues, setBookValues }: BooksFieldProps) {
  const { t } = useTranslation();
  const onValChanges = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.value });
  };

  const onValChecked = (event: any) => {
    setBookValues({ ...bookValues, [event.target.name]: event.target.checked });
  };

  const genresList = [
    t("dystopian"),
    t("fantasy"),
    t("yellow"),
    t("historian"),
    t("personal_grow"),
    t("psychological"),
  ];

  return (
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextField
          id="title"
          label={t("title")}
          name="title"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
          autoFocus
        ></TextField>
        <TextField
          id="author"
          label={t("author")}
          name="author"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
        ></TextField>
        <TextField
          id="editor"
          label={t("editor")}
          name="editor"
          variant="outlined"
          sx={{
            backgroundColor: "text.secondary",
            borderRadius: "4px",
          }}
          InputLabelProps={{
            sx: { color: "text.primary" },
          }}
          onChange={onValChanges}
        ></TextField>
        <FormControl>
          <InputLabel sx={{ color: "text.primary" }} id="genre-label">
            {t("genre")}
          </InputLabel>
          <Select
            labelId="genre-label"
            name="genre"
            label={t("genre")}
            onChange={onValChanges}
            sx={{
              backgroundColor: "text.secondary",
              borderRadius: "4px",
              "& .MuiSelect-icon": {
                color: "text.primary",
              },
            }}
          >
            {genresList.map((genre: string) => {
              return (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
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
          onChange={onValChanges}
        ></TextField>
        <FormControlLabel
          control={
            <Checkbox id="isRead" name="isRead" onChange={onValChecked} />
          }
          label={t("is_read")}
        />
      </Box>
    </Box>
  );
}

export default BooksField;
