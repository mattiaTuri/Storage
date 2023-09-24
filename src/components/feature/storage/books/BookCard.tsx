import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import ContentCard from "../ContentCard";
import { useEffect, useState } from "react";
import { BooksProps } from "../../../../models/Book";
import ArrowChangeContentCard from "../ArrowChangeContentCard";
import ActionDeleteBook from "./ActionDeleteBook";

function BookCard({ rows }: { rows: BooksProps[] }) {
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
  }, [rows, rangeElements]);

  return (
    <Box className="flex flex-col gap-4">
      {rangeElements.map((row: any) => {
        return (
          <Card key={row.id}>
            <CardContent className="flex flex-col gap-1">
              <ContentCard row={row.title} col="Title" />
              <ContentCard row={row.author} col="Author" />
              <ContentCard row={row.editor} col="Editor" />
              <ContentCard row={row.genre} col="Genres" />
              <ContentCard row={row.pages} col="Pages" />
              <ContentCard
                row={row.is_read == true ? "Yes" : "No"}
                col="Read"
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
