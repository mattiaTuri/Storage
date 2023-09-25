import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import ContentCard from "../ContentCard";
import { useEffect, useState } from "react";
import { BooksProps } from "../../../../models/Book";
import ArrowChangeContentCard from "../ArrowChangeContentCard";
import ActionDeleteBook from "./ActionDeleteBook";
import { useTranslation } from "react-i18next";

function BookCard({ rows }: { rows: BooksProps[] }) {
  const { t } = useTranslation();
  const [firstElem, setFirstElem] = useState<number>(0);
  const [lastElem, setLastElem] = useState<number>(5);
  const [disabledLeftArrow, setDisabledLeftArrow] = useState<boolean>(true);
  const [disabledRightArrow, setDisabledRightArrow] = useState<boolean>(false);
  const [rangeElements, setRangeElements] = useState<BooksProps[]>(
    rows.slice(firstElem, lastElem)
  );

  const loadPreviusFiveElem = () => {
    setRangeElements(rows.slice(firstElem - 5, lastElem - 5));
    setFirstElem(firstElem - 5);
    setLastElem(lastElem - 5);
  };

  const loadNextFiveElem = () => {
    setRangeElements(rows.slice(firstElem + 5, lastElem + 5));
    setFirstElem(firstElem + 5);
    setLastElem(lastElem + 5);
  };

  useEffect(() => {
    firstElem != 0 ? setDisabledLeftArrow(false) : setDisabledLeftArrow(true);
    rows.length > lastElem
      ? setDisabledRightArrow(false)
      : setDisabledRightArrow(true);
    setRangeElements(rows.slice(firstElem, lastElem));
  }, [firstElem, lastElem, rows]);

  return (
    <Box className="flex flex-col gap-4">
      {rangeElements.map((row: any) => {
        const genre = row.genre
        return (
          <Card key={row.id}>
            <CardContent className="flex flex-col gap-1">
              <ContentCard row={row.title} col={t("title")} />
              <ContentCard row={row.author} col={t("author")} />
              <ContentCard row={row.editor} col={t("editor")} />
              <ContentCard row={t(`genres.${genre}`)} col={t("genre")} />
              <ContentCard row={row.pages} col={t("pages")} />
              <ContentCard
                row={row.isRead == true ? t("yes") : t("no")}
                col={t("is_read")}
              />
              <ActionDeleteBook id={row.id} />
            </CardContent>
          </Card>
        );
      })}
      <ArrowChangeContentCard
        disabledLeftArrow={disabledLeftArrow}
        disabledRightArrow={disabledRightArrow}
        loadPreviusFiveElem={loadPreviusFiveElem}
        loadNextFiveElem={loadNextFiveElem}
      />
    </Box>
  );
}

export default BookCard;
