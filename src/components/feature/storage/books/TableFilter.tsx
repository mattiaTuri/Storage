import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { TableFilterProps } from "../../../../models/ComponentsModels";
import SelectBox from "../../../shared/SelectBox";
import { useEffect, useState } from "react";
import { getChartValue } from "../../dashboard/charts/chartsFunctions";
import { useDispatch, useSelector } from "react-redux";
import { booksSelector } from "../../../../store/books/selector";
import { BooksProps } from "../../../../models/Book";
import CustomButton from "../../../shared/CustomButton";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { getBooksList } from "../../../../controller/booksApi";

function TableFilter({ multipleGenre, setMultipleGenre }: TableFilterProps) {
  const { t } = useTranslation();
  const [genresList, setGenresList] = useState<any[]>([]);
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();

  const multipleSelectionGenre = (
    event: SelectChangeEvent<typeof multipleGenre>
  ) => {
    const {
      target: { value },
    } = event;
    setMultipleGenre(typeof value === "string" ? value.split(",") : value);
  };

  const ClearFilter = () => {
    setMultipleGenre([]);
    dispatch(getBooksList());
  };

  useEffect(() => {
    const genres = books.booksList.map((elem: BooksProps) => elem.genre);
    const newGenresList = getChartValue(genres);
    const genresTranslated: any[] = newGenresList.map((genre) => {
      const name = genre.name;
      return { key: name, translation: t(`genres.${name}`) };
    });
    setGenresList(genresTranslated);
  }, []);

  return (
    <Box className="flex flex-col gap-10 h-full w-full mt-10">
      <Box>
        <CustomButton
          id="clearFilter"
          title={t("clear_filters")}
          functionClick={() => ClearFilter()}
        >
          <FilterListOffIcon
            color="secondary"
            className="z-10 ease-in-out group-hover:text-white"
          />
        </CustomButton>
      </Box>
      <SelectBox
        id="genre-filter"
        label={`${t("genre")}`}
        selectLabel={`${t("genre")} *`}
        name="genre"
        value={multipleGenre}
        onChange={(e) => multipleSelectionGenre(e)}
        fixedLabel={false}
        labelError=""
        errorVisibility={false}
        objList={genresList}
        multiple={true}
      />
    </Box>
  );
}

export default TableFilter;
