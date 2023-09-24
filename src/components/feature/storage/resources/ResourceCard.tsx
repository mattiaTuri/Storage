import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import ContentCard from "../ContentCard";
import { useEffect, useState } from "react";
import ArrowChangeContentCard from "../ArrowChangeContentCard";
import { ResourcesProps } from "../../../../models/Resource";
import ActionDeleteResource from "./ActionDeleteResource";

function ResourceCard({ rows }: { rows: ResourcesProps[] }) {
  const [firstElem, setFirstElem] = useState<number>(0);
  const [lastElem, setLastElem] = useState<number>(5);
  const [disabledLeftArrow, setDisabledLeftArrow] = useState<boolean>(true);
  const [disabledRightArrow, setDisabledRightArrow] = useState<boolean>(false);
  const [rangeElements, setRangeElements] = useState<ResourcesProps[]>(
    rows.slice(firstElem, lastElem)
  );

  const loadPreviusFiveElem = () => {
    if (firstElem != 0) {
      setRangeElements(rows.slice(firstElem - 5, lastElem - 5));
      setFirstElem(firstElem - 5);
      setLastElem(lastElem - 5);
      setDisabledLeftArrow(false);
    } else {
      setDisabledLeftArrow(true);
    }
  };

  const loadNextFiveElem = () => {
    setRangeElements(rows.slice(firstElem + 5, lastElem + 5));
    setFirstElem(firstElem + 5);
    setLastElem(lastElem + 5);
    setDisabledLeftArrow(false);
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
              <ContentCard row={row.link} col="Link" />
              <ContentCard row={row.description} col="Description" />
              <ContentCard row={row.tag} col="Tag" />
              <ActionDeleteResource id={row.id} />
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

export default ResourceCard;
