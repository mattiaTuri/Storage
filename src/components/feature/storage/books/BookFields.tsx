import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Rating, Typography } from "@mui/material";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { errorsSelector } from "../../../../store/errors/selector";
import RatingStars from "../../../shared/RatingStars";
import { ChangeEvent } from "react";
import { BooksProps } from "../../../../models/Book";
import SelectInput from "../../../shared/SelectInput";

interface BooksFieldProps {
  bookValues: BooksProps
  onValChanges: (e: ChangeEvent<HTMLInputElement>) => void;
  onValSelected: (e:any) => void;
  onValChangesYear: (e:any) => void;
  onValRating: (e: any) => void;
}

function BooksField({ bookValues, onValChanges, onValSelected, onValChangesYear, onValRating }: BooksFieldProps) {
  const { t } = useTranslation()
  const errors = useSelector(errorsSelector)

  return (
    <Box
      id="modal-modal-description"
      className="flex flex-col gap-10 mt-10"
      component="form"
    >
      <Box className="flex flex-col gap-10">
        <TextInput id="title" label={`${t("title")} *`} name="title" onChange={(e) => onValChanges(e)} autofocus={true} labelError={errors.titleError.label} errorVisibility={errors.titleError.errorVisibility}/>
        <TextInput id="author" label={t("author")} name="author" onChange={(e) => onValChanges(e)} autofocus={false} labelError={""} errorVisibility={false}/>
        <SelectInput id="genre" label={`${t("genre")} *`} name="genre" onChange={(e) => onValSelected(e)} autofocus={false} labelError={errors.genreError.label} errorVisibility={errors.genreError.errorVisibility}/>      
      </Box>
      <Box className="flex items-center gap-10">
        <Box className="flex gap-2 items-center">
          <Typography className="w-max" component="legend">{`${t("rating")} *`}</Typography>
          <RatingStars functionChange={(e) => onValRating(e)}/>
        </Box>
        <TextInput id="reading_year" label={`${t("reading_year")} *`} name="reading_year" type="tel" value={bookValues.reading_year} onChange={(e) => onValChangesYear(e)} autofocus={false} labelError={errors.readingYearError.label} errorVisibility={errors.readingYearError.errorVisibility}/>
      </Box>
      <Box>
        <Typography component="span" variant="caption">* = {t("required_fields")}</Typography>
      </Box>
    </Box>
  );
}

export default BooksField;
