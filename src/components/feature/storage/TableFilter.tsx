import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { TableFilterProps } from "../../../models/ComponentsModels";
import SelectBox from "../../shared/SelectBox";
import { useEffect, useState } from "react";
import { getChartValue } from "../dashboard/charts/chartsFunctions";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../store/books/selector";
import { BooksProps } from "../../../models/Book";

function TableFilter({ genreName, setGenreName }: TableFilterProps) {
  const { t } = useTranslation();
  const [genresList, setGenresList] = useState<any[]>([]);
  const books = useSelector(booksSelector);

  const multipleSelectionGenre = (
    event: SelectChangeEvent<typeof genreName>
  ) => {
    const {
      target: { value },
    } = event;
    setGenreName(typeof value === "string" ? value.split(",") : value);
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
      <SelectBox
        id="genre-filter"
        label={`${t("genre")}`}
        selectLabel={`${t("genre")} *`}
        name="genre"
        value={genreName}
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
