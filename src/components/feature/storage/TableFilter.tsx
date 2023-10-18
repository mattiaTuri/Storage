import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from "@mui/material/Box"
import { useTranslation } from "react-i18next";
import { TableFilterProps } from "../../../models/ComponentsModels";
import SelectBox from "../../shared/SelectBox";

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
           <SelectBox id="genre-filter" label={`${t("genre")} *`} selectLabel={`${t("genre")} *`} name="genre" value={genreName} onChange={(e) => multipleSelectionGenre(e)} fixedLabel={false} labelError="" errorVisibility={false} objList={genresList} multiple={true}/>
        </Box>
    )
}

export default TableFilter