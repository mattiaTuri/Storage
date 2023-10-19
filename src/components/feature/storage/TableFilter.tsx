import { SelectChangeEvent } from "@mui/material"
import Box from "@mui/material/Box"
import { useTranslation } from "react-i18next";
import { TableFilterProps } from "../../../models/ComponentsModels";
import SelectBox from "../../shared/SelectBox";
import { genresList } from "../../../date/genresList";

function TableFilter({genreName, setGenreName} : TableFilterProps){
    const { t } = useTranslation();

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
           <SelectBox id="genre-filter" label={`${t("genre")}`} selectLabel={`${t("genre")} *`} name="genre" value={genreName} onChange={(e) => multipleSelectionGenre(e)} fixedLabel={false} labelError="" errorVisibility={false} objList={genresList} multiple={true}/>
        </Box>
    )
}

export default TableFilter