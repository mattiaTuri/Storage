import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from "@mui/material/Box"
import { useTranslation } from "react-i18next";
import { TableFilterProps } from "../../../models/ComponentsModels";

function TableFilter({genreName, setGenreName} : TableFilterProps){
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

      const multipleSelectionGenre = (event: SelectChangeEvent<typeof genreName>) => {
        const {
          target: { value },
        } = event;
        setGenreName(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    return (
        <Box className="flex flex-col gap-10 h-full w-full mt-10">
          <FormControl className="w-full">
              <InputLabel sx={{ color: "text.primary" }} id="genre-label">
              {t("genre")}
              </InputLabel>
              <Select
                  id="genre-filter"
                  labelId="genre-label"
                  name="genre"
                  value={genreName}
                  onChange={multipleSelectionGenre}
                  label={`${t("genre")}`}
                  sx={{
                      backgroundColor: "text.secondary",
                      borderRadius: "4px",
                      "& .MuiSelect-icon": {
                      color: "text.primary",
                      },
                  }}
                  multiple
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
        </Box>
    )
}

export default TableFilter